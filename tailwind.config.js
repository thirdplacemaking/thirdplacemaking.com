module.exports = {
  mode: "jit",
  purge: ["./content/**/*.md", "./content/**/*.html", "./layouts/**/*.html"],
  theme: {
    extend: {
      inset: {
       'unset': 'unset',
      }
    },
    screens: {
      sm: '30rem', /* 480px */
      md: '48rem', /* 768px */
      lg: '60rem', /* 960px */
      xl: '90rem', /* 1440px */
    },
    container: {
      center: true,
      padding: '2rem'
    },
    colors: {
      white: '#FFF',
      gray: {
        1.125: '#F2F2F2',
        1.25: '#E6E6E6',
        1.5: '#D3D3D3',
        2: '#B7B7B7',
        3: '#959595',
        4: '#7F7F7F',
        5: '#6F6F6F',
        7: '#5A5A5A',
        9: '#494949',
        11: '#3C3C3C'
      },
      blue: {
        1.125: '#F1F1F5',
        1.25: '#E6E6E9',
        1.5: '#D2D2DC',
        2: '#B5B5CD',
        3: '#9090C5',
        4: '#7A7AB1',
        5: '#6868B2',
        7: '#4E4EAA',
        9: '#3D3D9A',
        11: '#353573'
      },
      turquoise: {
        1.125: '#E8F3F3',
        1.25: '#D4EAEA',
        1.5: '#AFDBDB',
        2: '#71C5C5',
        3: '#4BA2A2',
        4: '#458A8A',
        5: '#437878',
        7: '#366060',
        9: '#314E4E',
        11: '#254141'
      },
      green: {
        1.125: '#EAF3EA',
        1.25: '#D9EBD9',
        1.5: '#B8DCB8',
        2: '#84C784',
        3: '#4AA84A',
        4: '#3C903C',
        5: '#377E37',
        7: '#316431',
        9: '#2E512E',
        11: '#254325'
      }
    },
    fontFamily: {
      'sans': ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      'serif': ['"IBM Plex Serif"', 'ui-serif', 'Georgia', 'serif'],
    }
  }
};
