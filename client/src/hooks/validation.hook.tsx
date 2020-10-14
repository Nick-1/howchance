const EMAIL = /\S+@\S+\.\S+/
const PASSWORD = /^[0-9a-zA-Z]{8,}$/
const TITLE = /^[0-9a-zA-Z]{3,}$/

export const isValid = (type: string, value: string) => {
    switch (type) {
        case 'email':
            if (!EMAIL.test(value)) window.M.toast({html: 'Use correct email please'})
            return EMAIL.test(value);
        case 'password':
            if (!PASSWORD.test(value)) window.M.toast({html: 'Password should contain at leas 8 characters'})
            return PASSWORD.test(value);
        case 'title':
            if (!TITLE.test(value)) window.M.toast({html: 'Title should contain at leas 3 characters'})
            return TITLE.test(value);
    }
}