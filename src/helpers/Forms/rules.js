import { Regex } from './regex'

const Auth = {
  Username: {
    required: 'Required field',
    pattern: {
      value: Regex.Username,
      message: 'Invalid username format.',
    },
    maxLength: {
      value: 29,
      message: 'Maximum 29 characters',
    },
    minLength: {
      value: 4,
      message: 'Minimum 4 characters',
    },
  },
  nonUsername: {
    required: 'Required field',
    pattern: {
      value: Regex.Username,
      message: 'Invalid username format.',
    },
    maxLength: {
      value: 29,
      message: 'Maximum 29 characters',
    },
    minLength: {
      value: 4,
      message: 'Minimum 4 characters',
    },
  },
  Email: {
    required: 'Required field',
    pattern: {
      value: Regex.Email,
      message: 'Invalid email format',
    },
  },
  nonEmail: {
    pattern: {
      value: Regex.Email,
      message: 'Invalid email format',
    },
  },
  Displayname: {
    required: 'Required field',
    pattern: {
      value: Regex.Displayname,
      message: 'Invalid display name format.',
    },
    maxLength: {
      value: 29,
      message: 'Maximum 29 characters',
    },
    minLength: {
      value: 4,
      message: 'Minimum 4 characters',
    },
  },
  nonDisplayname: {
    pattern: {
      value: Regex.Displayname,
      message: 'Invalid display name format.',
    },
    maxLength: {
      value: 29,
      message: 'Maximum 29 characters',
    },
    minLength: {
      value: 4,
      message: 'Minimum 4 characters',
    },
  },
  Password: {
    required: 'Required field',
    minLength: {
      value: 8,
      message: 'Minimum 8 characters',
    },
    maxLength: {
      value: 20,
      message: 'Maximum 20 characters',
    },
  },
}


// const Posts = {
//   Title: {
//     required,
//     minLength: {
//       value: 3,
//       message: 'Минимум 3 символа',
//     },
//     maxLength: {
//       value: 100,
//       message: 'Максимум 100 символов',
//     },
//   },
//   Description: {
//     minLength: {
//       value: 3,
//       message: 'Минимум 3 символа',
//     },
//     maxLength: {
//       value: 3000,
//       message: 'Максимум 3000 символов',
//     },
//   },
//   Location: {
//     maxLength: {
//       value: 50,
//       message: 'Максимум 50 символов',
//     },
//   },
//   Images: {
//     required,
//   },
// }

export const Rules = {
  Auth,
  // Posts,
}