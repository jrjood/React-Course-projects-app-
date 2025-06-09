import Input from './Input';
const NewProject = () => {
  return (
    <div className='w-[35rem] mt-16 '>
      <menu className=' flex gap-4 my-4 items-center justify-end'>
        <li>
          <button className='capitalize text-stone-800 hover:text-stone-950'>
            cancel
          </button>
        </li>
        <li>
          <button
            className='capitalize bg-stone-900 text-stone-50 hover:bg-stone-950 py-2
           px-6 rounded-md'
          >
            save
          </button>
        </li>
      </menu>
      <div>
        <Input label='title' type='text' />
        <Input label='description' textArea />
        <Input label='due date' type='date' />
      </div>
    </div>
  );
};
export default NewProject;
