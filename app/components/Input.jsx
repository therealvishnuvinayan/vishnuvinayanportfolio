const TextInput = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  required,
}) => {
  return (
    <div className="mb-8">
      <label
        className="block text-gray-300 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="bg-transparent shadow appearance-none border dark:border-primary dark:border-opacity-50 border-gray-200 border-opacity-30 w-full py-4 px-6 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline rounded-md"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextInput;

export const TextAreaInput = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  required,
}) => {
  return (
    <div className="mb-8">
      <label
        className="block text-gray-300 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <textarea
        className="bg-transparent shadow appearance-none border dark:border-primary dark:border-opacity-50 border-gray-200 border-opacity-30 w-full py-4 px-6 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline rounded-md max-h-24 min-h-[96px]"
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        value={value}
      />
    </div>
  );
};

TextAreaInput;
