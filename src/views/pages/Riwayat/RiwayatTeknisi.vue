<template>
  <div class="container-fluid p-0">
    <h1 class="h3 mb-3 text-center"><strong>Riwayat Teknisi</strong></h1>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <table class="table table-striped table-bordered nowrap table-hover" id="example">
              <thead class="text-center">
                <tr>
                  <th>No</th>
                  <th>Nama Pelanggan</th>
                  <th>No.Telp</th>
                  <th>Nama Elektronik</th>
                  <th>Masalah</th>
                  <th>Teknisi</th>
                  <th>Tanggal</th>
                  <th>Tanggal Selesai</th>
                  <th>Status</th>
                  <th>Deskripsi</th>
                  <th>alamat</th>
                  <th>Total Biaya</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(pesanan, index) in riwayatPesanan" :key="pesanan.id">
                  <td>{{ index + 1 }}</td>
                  <td>{{ pesanan.user_pelanggan.username }}</td>
                  <td>{{ pesanan.user_pelanggan.no_telp }}</td>
                  <td>{{ pesanan.data_layanan.layanan }}</td>
                  <td>{{ pesanan.masalah }}</td>
                  <td :class="{ 'text-danger': !pesanan.user_teknisi.username }">{{ pesanan.user_teknisi.username ||
                  'Data kosong' }}</td>
                  <template v-if="pesanan.tgl_pesan_awal">
                    <td>{{ formatDate(pesanan.tgl_pesan_awal) }}</td>
                  </template>
                  <template v-else>
                    <td class="text-danger">Data kosong</td>
                  </template>
                  <template v-if="pesanan.tgl_pesan_selesai">
                    <td>{{ formatDate(pesanan.tgl_pesan_selesai) }}</td>
                  </template>
                  <template v-else>
                    <td class="text-danger">Data kosong</td>
                  </template>
                  <td>
                    <span v-if="pesanan.status === 0" class="text-info">Menunggu Konfirmasi</span>
                    <span v-else-if="pesanan.status === 1" class="text-warning">Proses Pesanan</span>
                    <span v-else-if="pesanan.status === 2" class="text-warning">Proses Pengerjaan</span>
                    <span v-else-if="pesanan.status === 3" class="text-success">Pesanan Selesai</span>
                    <span v-else-if="pesanan.status === 4" class="text-danger">Pesanan Dibatalkan</span>
                  </td>
                  <td :class="{ 'text-danger': !pesanan.deskripsi }">{{ pesanan.deskripsi || 'Data kosong' }}</td>
                  <td>{{ pesanan.alamat }}</td>
                  <td :class="{ 'text-danger': !pesanan.harga_jasa || !pesanan.harga_alat }">
                    {{ calculateTotal(pesanan.harga_jasa, pesanan.harga_alat) || 'Pesanan kosong' }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import feather from "feather-icons";
import axios from 'axios';

export default {
  name: "RiwayatAdmin",

  mounted() {
    this.getData();
    feather.replace();
  },

  data() {
    return {
      riwayatPesanan: []
    };
  },

  methods: {
    async getData() {
      try {
        const userData = JSON.parse(localStorage.getItem('user'));
        const userID = userData.data.id;
        const response = await axios.get(`https://umkmbackend.pjjaka.com/api/riwayat-pesanan-Teknisi/${userID}`);
        this.riwayatPesanan = response.data;
      } catch (error) {
        console.error(error);
      }
    },

    formatDate(dateString) {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;

      return formattedDate;
    },

    calculateTotal(hargaJasa, hargaAlat) {
      if (!hargaJasa || !hargaAlat) {
        return 'Data kosong';
      }
      const total = parseFloat(hargaJasa) + parseFloat(hargaAlat);
      return total;
    },
  },
};

</script>

<style></style>
