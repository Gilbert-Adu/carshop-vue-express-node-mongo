<script>
export default {
    name: 'NavBar'
}
</script>

<template>
    <header>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Inventory</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="http://localhost:3000/admin/loginpage">Admin</a></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>

header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul li {
  margin-right: 1rem;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}


</style>