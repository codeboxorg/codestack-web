type HookFormSubmit = (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>

interface HookFormInput<T extends string> {
    register?: UseFormRegisterReturn<T>
    status: InputStatus
    message?: string
    roles?: Omit<RegisterOptions<TFieldValues, TName>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>
}
