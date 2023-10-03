const Pen = (props: { className: string }) => {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.7693 3.89747L7.58799 9.07873C7.24448 9.42224 7.07273 9.59399 6.92906 9.78629C6.80148 9.95706 6.69058 10.1397 6.59787 10.3316C6.49348 10.5478 6.42027 10.7794 6.27386 11.2426L5.51115 13.6556L7.92414 12.8928C8.38734 12.7464 8.61893 12.6732 8.83508 12.5688C9.02703 12.4761 9.20965 12.3652 9.38042 12.2377C9.57272 12.094 9.74447 11.9222 10.088 11.5787L15.2693 6.39743M12.7693 3.89747L13.75 2.91678C14.0908 2.57602 14.2612 2.40563 14.445 2.31455C14.7947 2.14124 15.2053 2.14124 15.5551 2.31457C15.7389 2.40566 15.9092 2.57605 16.25 2.91681C16.5907 3.25757 16.7611 3.42795 16.8522 3.61175C17.0255 3.96148 17.0255 4.37209 16.8522 4.72182C16.7611 4.90561 16.5907 5.07599 16.25 5.41674L15.2693 6.39743M12.7693 3.89747L15.2693 6.39743M16.6666 17.5001H3.33325"
        strokeWidth="1.25px"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      ></path>
    </svg>
  );
};
export default Pen;