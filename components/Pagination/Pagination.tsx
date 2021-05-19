import React from 'react'
import IconNext from '../UI/Icons/IconNext'
import IconPrevious from '../UI/Icons/IconPrevious'
import { PaginationWrapper, Button, Page } from './styled'

type PaginationProps = {
  previousPage: () => void
  nextPage: () => void
  currentPage: number
}

const Pagination = ({ previousPage, nextPage, currentPage }: PaginationProps) => {
  return (
    <nav className="pagination" aria-label="Pagination">
      <PaginationWrapper>
        {currentPage > 1 && (
          <Button onClick={previousPage} id="previousURL" type="button" aria-label="Previous">
            <IconPrevious fill="var(--yellow)" />
          </Button>
        )}
        <Page aria-current="page">
          <span>Page {currentPage}</span>
        </Page>
        <Button onClick={nextPage} id="nextURL" type="button" aria-label="Next">
          <IconNext fill="var(--yellow)" />
        </Button>
      </PaginationWrapper>
    </nav>
  )
}

export default Pagination
