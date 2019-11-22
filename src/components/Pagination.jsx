import React from 'react';

const Pagination = ({ currentPage, totalPages, changePage }) => {
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const pageItems = [
    {
      label: 'First',
      number: 1,
      isDisabled: currentPage === 1,
      itemClass: currentPage === 1 ? ' disabled' : '',
    },
    {
      label: 'Previous',
      number: prevPage,
      isDisabled: currentPage === 1,
      itemClass: currentPage === 1 ? ' disabled' : '',
    },
    {
      label: currentPage,
      number: currentPage,
      itemClass: ' active',
    },
    {
      label: 'Next',
      number: nextPage,
      isDisabled: currentPage === totalPages,
      itemClass: currentPage === totalPages ? ' disabled' : '',
    },
    {
      label: 'Last',
      number: totalPages,
      isDisabled: currentPage === totalPages,
      itemClass: currentPage === totalPages ? ' disabled' : '',
    },
  ];

  return (
    <nav aria-label='Paginate movies'>
      <ul className='pagination'>
        {pageItems.map(item => {
          return (
            <li className={`page-item${item.itemClass}`}>
              <a
                className='page-link'
                onClick={() => changePage(item.number)}
                tabIndex='-1'
                aria-disabled={item.isDisabled}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
