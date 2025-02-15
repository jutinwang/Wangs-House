function switchMenu(){
    document.addEventListener("DOMContentLoaded", function () {
        const lunchButton = document.getElementById('lunch');
        const dinnerButton = document.getElementById('dinner');
        const lunchMenu = document.getElementById('lunchMenu');
        const dinnerMenu = document.getElementById('dinnerMenu');
      
        // Show lunch menu and hide dinner menu
        lunchButton.addEventListener('click', function () {
          lunchMenu.style.display = 'grid';
          dinnerMenu.style.display = 'none';
        });
      
        // Show dinner menu and hide lunch menu
        dinnerButton.addEventListener('click', function () {
          dinnerMenu.style.display = 'grid';
          lunchMenu.style.display = 'none';
        });
      });    
}
