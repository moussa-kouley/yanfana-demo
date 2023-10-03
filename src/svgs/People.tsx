const People = (props: { className: string }) => {
  return (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 9.5C15.933 9.5 17.5 7.933 17.5 6C17.5 4.067 15.933 2.5 14 2.5M17.5 21.5H20.6111C21.6543 21.5 22.5 20.6543 22.5 19.6111C22.5 15.9599 19.5401 13 15.8889 13H15.5M11.75 6C11.75 7.933 10.183 9.5 8.25 9.5C6.317 9.5 4.75 7.933 4.75 6C4.75 4.067 6.317 2.5 8.25 2.5C10.183 2.5 11.75 4.067 11.75 6ZM3.5 21.5H13C14.1046 21.5 15 20.6046 15 19.5V19.25C15 15.5221 11.9779 12.5 8.25 12.5C4.52208 12.5 1.5 15.5221 1.5 19.25V19.5C1.5 20.6046 2.39543 21.5 3.5 21.5Z"
        {...props}
        strokeWidth="1.5px"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
export default People;
