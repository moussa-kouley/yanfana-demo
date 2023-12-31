const CheckFilled = (props: { className: string }) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M10 17l-5-5 1.41-1.42L10 14.17l7.59-7.59L19 8m-7-6A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z"
        {...props}
      ></path>
    </svg>
  );
};

export default CheckFilled;
