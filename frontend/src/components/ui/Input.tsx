type PropsInput = {
    type: string
    name: string
    id: string
    label: string
    value: string
    onChange: (name: string, value: string) => void
    placeholder?: string
}

export default function Input(props: PropsInput) {
    return (
      <div>
        <label htmlFor={props.name} className="block text-sm font-medium leading-6 text-primary">
          {props.label}
        </label>
        <div className="mt-2">
          <input
            type={props.type}
            name={props.name}
            id={props.id}
            className="block w-full rounded-md border-0 py-1.5 text-black-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            placeholder={props.placeholder || "Title..."}
            value={props.value}
            onChange={(e) => props.onChange(e.target.name, e.target.value)}
          />
        </div>
      </div>
    )
  }