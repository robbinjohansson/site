module.exports = {
  theme: {
    extend: {
      spacing: {
        '4.4': '1.1rem',
      },
      maxWidth: {
        'none': 'none',
      },
      boxShadow: {
        'link': 'inset 0 -3px 0 0 rgba(0, 179, 154, 0.4)',
      },
    },
    fontFamily: {
      sans: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      mono: [
        'Inconsolata',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  variants: {},
  plugins: []
}
