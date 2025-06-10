import { useRef } from 'react';
import Input from './Input';
const NewProject = ({ onAdd, onClose }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    ///validation

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });

    onClose();
  }

  return (
    <div className='w-[35rem] mt-16 '>
      <menu className=' flex gap-4 my-4 items-center justify-end'>
        <li>
          <button
            onClick={onClose}
            className='capitalize text-stone-800 hover:text-stone-950'
          >
            cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className='capitalize bg-stone-900 text-stone-50 hover:bg-stone-950 py-2 px-6 rounded-md'
          >
            save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} label='title' type='text' />
        <Input ref={description} label='description' textArea />
        <Input ref={dueDate} label='due date' type='date' />
      </div>
    </div>
  );
};
export default NewProject;
