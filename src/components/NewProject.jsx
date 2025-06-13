import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

const NewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    ///validation
    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption='Okay'>
        <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
        <p className='text-stone-600 mb-4'>
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className='text-stone-600 mb-4'>
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className='w-[35rem] mt-16 '>
        <menu className=' flex gap-4 my-4 items-center justify-end'>
          <li>
            <button
              onClick={onCancel}
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
    </>
  );
};
export default NewProject;
