<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
.btn {
  border: none;
  background-color: #9d55a0;
  border-radius: 10px;
  color: #FFFFFF;
}

.btn:hover {
  border: 1px solid #9d55a0;
  background-color: #FFFFFF;
  color: #9d55a0;
}

input {
  border: none;
}

input:focus {
  outline: none;
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
