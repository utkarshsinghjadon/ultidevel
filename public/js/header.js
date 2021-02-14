const header = document.getElementById("header-div");
const he=`<header class="text-gray-700 body-font">
<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
    <img src="https://firebasestorage.googleapis.com/v0/b/atomic-airship-284606.appspot.com/o/images%2FFull%20page%20print.svg?alt=media&token=335eef36-5fbe-41c4-90d9-887319a22a3e" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-20 h-20 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24" >
      
              <span class="ml-3 text-xl">Elite Academy</span>
  </a>
  <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    <a id="a1" href="/" class="mr-5 hover:text-gray-900">Home</a>
    <!-- <a id="a2" href="/about" class="mr-5 hover:text-gray-900">About</a> -->
    <form id="chooseClass">
    <!-- <label for="standard" style="color: black;">Choose a class/standard:</label> -->
    <select name="standard" id="standard">
      <option value="null" selected>Choose a Class/Standard</option>
      <optgroup label="School">
        <option value="Class-IX">Class IX</option>
        <option value="Class-X">Class X</option>
        <option value="Class-XI">Class XI</option>
        <option value="Class-XII">Class XII</option>
      </optgroup>
      <optgroup label="After School">
        <option value="BBA">BBA</option>
        <option value="B_Com">B Com</option>
        <option value="CA_found">CA (Foundation)</option>
      </optgroup>
    </select>
    <br><br>
    <!-- <input type="submit" value="Submit"> -->
  </form>
    <!-- <a id="a3" href="https://test.eliteacademy.co.in/Class-IX/" class="mr-5 hover:text-gray-900">Class IX</a>
    <a id="a4" href="https://test.eliteacademy.co.in/Class-X/" class="mr-5 hover:text-gray-900">Class X</a>
    <a id="a5" href="https://test.eliteacademy.co.in/Class-XI/" class="mr-5 hover:text-gray-900">Class XI</a>
    <a id="a6" href="https://test.eliteacademy.co.in/Class-XII/" class="mr-5 hover:text-gray-900">Class XII</a>
    <a id="a7" href="/" class="mr-5 hover:text-gray-900">BBA</a>
    <a id="a8" href="/" class="mr-5 hover:text-gray-900">B Com</a>
    <a id="a9" href="/" class="mr-5 hover:text-gray-900">CA (Foundation)</a> -->
    <a id="a10" href="/help" class="mr-5 hover:text-gray-900">Help</a>
    
  </nav>
  <div id="loggedin"></div>
  
  <div>
  <a id="signup_link" class="modal-trigger" href="#" data-target="modal-signup">
  <button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Sign up/Login
    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </button>
</a>
<a id="profile_link" class="modal-trigger" href="#" data-target="modal-account">
  <button id="profile" class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Profile
    <!-- <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg> -->
    <span class="material-icons">
      account_circle
      </span>
  </button>
  </a>
</div>
</div>
</header>
<hr>`;
header.innerHTML=he;