<template>
  <div class="container">
    <header class="">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="">
        <g-link class="" to="/">Home</g-link>
        <g-link class="" to="/about/">About</g-link>
      </nav>
    </header>
    <div class="w-full md:w-1/2 mx-auto">
      <slot/>
    </div>
  </div>
</template>

<style>
  @font-face {
    font-family: 'Inconsolata';
    font-style:  normal;
    font-weight: 400;
    font-display: swap;
    src: url("../assets/fonts/Inconsolata-Regular.ttf") format("ttf");
  }

  @font-face {
    font-family: 'Inconsolata';
    font-style:  normal;
    font-weight: 700;
    font-display: swap;
    src: url("../assets/fonts/Inconsolata-Bold.ttf") format("ttf");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 100;
    font-display: swap;
    src: url("../assets/fonts/Inter-Thin-BETA.woff2?v=3.11") format("woff2"),
         url("../assets/fonts/Inter-Thin-BETA.woff?v=3.11") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 100;
    font-display: swap;
    src: url("../assets/fonts/Inter-ThinItalic-BETA.woff2?v=3.11") format("woff2"),
         url("../assets/fonts/Inter-ThinItalic-BETA.woff?v=3.11") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 200;
    font-display: swap;
    src: url("../assets/fonts/Inter-ExtraLight-BETA.woff2?v=3.11") format("woff2"),
         url("../assets/fonts/Inter-ExtraLight-BETA.woff?v=3.11") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 200;
    font-display: swap;
    src: url("../assets/fonts/Inter-ExtraLightItalic-BETA.woff2?v=3.11") format("woff2"),
         url("../assets/fonts/Inter-ExtraLightItalic-BETA.woff?v=3.11") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 300;
    font-display: swap;
    src: url("../assets/fonts/Inter-Light-BETA.woff2?v=3.11") format("woff2"),
         url("../assets/fonts/Inter-Light-BETA.woff?v=3.11") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 300;
    font-display: swap;
    src: url("../assets/fonts/Inter-LightItalic-BETA.woff2?v=3.11") format("woff2"),
         url("../assets/fonts/Inter-LightItalic-BETA.woff?v=3.11") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 400;
    font-display: swap;
    src: url("../assets/fonts/Inter-Regular.woff2?v=3.11") format("woff2"),
         url("../assets/fonts/Inter-Regular.woff?v=3.11") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 400;
    font-display: swap;
    src: url("../assets/fonts/Inter-Italic.woff2?v=3.11") format("woff2"),
         url("../assets/fonts/Inter-Italic.woff?v=3.11") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 500;
    font-display: swap;
    src: url("../assets/fonts/Inter-Medium.woff2?v=3.11") format("woff2"),
         url("../assets/fonts/Inter-Medium.woff?v=3.11") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 500;
    font-display: swap;
    src: url("../assets/fonts/Inter-MediumItalic.woff2?v=3.11") format("woff2"),
         url("../assets/fonts/Inter-MediumItalic.woff?v=3.11") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 600;
    font-display: swap;
    src: url("../assets/fonts/Inter-SemiBold.woff2?v=3.11") format("woff2"),
         url("../assets/fonts/Inter-SemiBold.woff?v=3.11") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 600;
    font-display: swap;
    src: url("../assets/fonts/Inter-SemiBoldItalic.woff2?v=3.11") format("woff2"),
         url("../assets/fonts/Inter-SemiBoldItalic.woff?v=3.11") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 700;
    font-display: swap;
    src: url("../assets/fonts/Inter-Bold.woff2?v=3.11") format("woff2"),
         url("../assets/fonts/Inter-Bold.woff?v=3.11") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 700;
    font-display: swap;
    src: url("../assets/fonts/Inter-BoldItalic.woff2?v=3.11") format("woff2"),
         url("../assets/fonts/Inter-BoldItalic.woff?v=3.11") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 800;
    font-display: swap;
    src: url("../assets/fonts/Inter-ExtraBold.woff2?v=3.11") format("woff2"),
         url("../assets/fonts/Inter-ExtraBold.woff?v=3.11") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 800;
    font-display: swap;
    src: url("../assets/fonts/Inter-ExtraBoldItalic.woff2?v=3.11") format("woff2"),
         url("../assets/fonts/Inter-ExtraBoldItalic.woff?v=3.11") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 900;
    font-display: swap;
    src: url("../assets/fonts/Inter-Black.woff2?v=3.11") format("woff2"),
         url("../assets/fonts/Inter-Black.woff?v=3.11") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 900;
    font-display: swap;
    src: url("../assets/fonts/Inter-BlackItalic.woff2?v=3.11") format("woff2"),
         url("../assets/fonts/Inter-BlackItalic.woff?v=3.11") format("woff");
  }

  h1,h2,h3,h4,h5,h6 { @apply font-extrabold tracking-tight text-black; }
  h1 { @apply text-3xl; }
</style>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
