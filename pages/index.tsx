import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import Layout, { siteTitle } from '../components/Layout'
import Pagination from '../components/Pagination'
import PhotoGallery from '../components/PhotoGallery'
import SearchBar from '../components/SearchBar'
import Container from '../components/UI/Container'
import { fetchData } from '../lib/api'

const per_page = 10

export default function Home({ data }) {
  const [photos, setPhotos] = useState(data)
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const handleSearchChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setQuery(e.target.value)
  }

  const handleSearchClick = async () => {
    const results = await fetchData(`https://api.pexels.com/v1/search?query=${query}&per_page=${per_page}`)
    setPhotos(results.photos)
  }

  const setEnter = (e: { key: string }) => {
    if (e.key === 'Enter') {
      handleSearchClick()
    }
  }

  const onPreviousClick = async () => {
    if (query) {
      const results = await fetchData(
        `https://api.pexels.com/v1/search?query=${query}&page=${currentPage - 1}&per_page=${per_page}`
      )
      setCurrentPage(results.page)
      setPhotos(results.photos)
    } else {
      const prevPage = await fetchData(`https://api.pexels.com/v1/curated?page=${currentPage - 1}&per_page=${per_page}`)
      setCurrentPage(prevPage.page)
      setPhotos(prevPage.photos)
    }
  }

  const onNextClick = async () => {
    if (query) {
      const results = await fetchData(
        `https://api.pexels.com/v1/search?query=${query}&page=${currentPage + 1}&per_page=${per_page}`
      )
      setCurrentPage(results.page)
      setPhotos(results.photos)
    } else {
      const nextPage = await fetchData(`https://api.pexels.com/v1/curated?page=${currentPage + 1}&per_page=${per_page}`)
      setCurrentPage(nextPage.page)
      setPhotos(nextPage.photos)
    }
  }

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Container>
        <SearchBar
          value={query}
          onChangeHandler={handleSearchChange}
          onClickHandler={handleSearchClick}
          onKeyDownHandler={setEnter}
        />
        <PhotoGallery photos={photos} />
        <Pagination previousPage={onPreviousClick} currentPage={currentPage} nextPage={onNextClick} />
      </Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetchData(`https://api.pexels.com/v1/curated?per_page=${per_page}`)

  return {
    props: {
      data: data.photos,
    },
  }
}
