<template>
    <div>
        <h1>Mahasiswa</h1>

        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link :to="{ name: 'CreateMahasiswa' }" class="btn btn-primary">Create Mahasiswa</router-link>
            </div>
        </div>
        <br />

        <table class="table table-hover">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Mahasiswa Nim</td>
                    <td>Mahasiswa Nama</td>
                    <td>Mahasiswa Email</td>
                    <td><center>Actions</center></td>
                </tr>
            </thead>

            <tbody>
                <tr v-for="mahasiswa in mahasiswas">
                    <td>{{ mahasiswa.id }}</td>
                    <td>{{ mahasiswa.nim }}</td>
                    <td>{{ mahasiswa.nama }}</td>
                    <td>{{ mahasiswa.email }}</td>
                    <td>
                        <router-link :to="{name: 'EditMahasiswa', params: { id: mahasiswa.id }}" class="btn btn-primary">Edit</router-link>
                    </td>
                    <td>
                        <button class="btn btn-danger" v-on:click="deleteMahasiswa(mahasiswa.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                mahasiswas: []
            }
        },

        created: function () {
            this.fetchMahasiswas();
        },

        methods: {
            fetchMahasiswas() {
                let uri = 'http://localhost:8000/mahasiswas';
                this.axios.get(uri).then((response) => {
                    this.mahasiswas = response.data;
                });
            },
            deleteMahasiswa(id) {
                let uri = `http://localhost:8000/mahasiswas/${id}`;
                this.mahasiswas.splice(id, 1);
                this.axios.delete(uri);
            }
        }
    }
</script>