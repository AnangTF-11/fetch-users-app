// URL API JSONPlaceholder
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Fungsi untuk menampilkan daftar pengguna di halaman
function displayUsers(users) {
  const userList = document.getElementById('user-list');
  userList.innerHTML = ''; // Pastikan #user-list kosong sebelum diisi

  // Iterasi setiap pengguna dan tambahkan ke dalam #user-list
  users.forEach(user => {
    const userItem = document.createElement('div');
    userItem.classList.add('user-card');
    userItem.innerHTML = `
      <h3>${user.name}</h3>
      <p><span>Email:</span> ${user.email}</p>
      <p><span>Alamat:</span> ${user.address.street}, ${user.address.city}</p>
      <p><span>Telepon:</span> ${user.phone}</p>
      <p><span>Perusahaan:</span> ${user.company.name}</p>
    `;
    userList.appendChild(userItem);
  });
}

// Fungsi async untuk mengambil data pengguna
async function fetchData() {
  try {
    const response = await fetch(apiUrl); // Mengambil data dari API
    const data = await response.json(); // Mengubah respons menjadi JSON
    displayUsers(data); // Menampilkan data di halaman
  } catch (error) {
    console.error('Error:', error); // Menangani error
  }
}

// Memanggil fungsi fetchData saat halaman di-load
fetchData();
