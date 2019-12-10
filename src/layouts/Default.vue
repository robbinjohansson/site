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
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
