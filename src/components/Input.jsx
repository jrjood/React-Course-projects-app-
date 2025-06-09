const Input = ({ label, textArea, ...props }) => {
  const classes =
    'w-full p-1 border-b-2 bg-stone-200 border-stone-300 rounded-sm text-stone-600 focus:outline-none focus:border-stone-600';
  return (
    <p className='flex flex-col gap-1 my-4'>
      <label className='uppercase font-bold text-sm text-stone-500' htmlFor=''>
        {label}
      </label>
      {textArea ? (
        <textarea className={classes} {...props} name='' id=''></textarea>
      ) : (
        <input className={classes} {...props} />
      )}
    </p>
  );
};
export default Input;
