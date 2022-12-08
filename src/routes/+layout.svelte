<style>
  .nav {
    display: flex;
    justify-content: center;
  }

  .nav-link {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: larger;
    text-decoration: none;
    color: #2962FF;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
  }

  .nav-link:hover {
    background-color: blue;
    color: lightgreen;
  }
</style>

<nav class="nav">
  <a class="nav-link" href="/">Home</a>
  <a class="nav-link" href="/about">About</a>
  <a class="nav-link" href="/training">Training Room</a>
</nav>
<slot></slot>