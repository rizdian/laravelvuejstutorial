<template>
    <div>
        <h1>Create An Mahasiswa</h1>
        <form v-on:submit.prevent="addMahasiswa">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Nim:</label>
                        <input type="text" class="form-control" v-model="mahasiswa.nim">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Nama:</label>
                        <input type="text" class="form-control col-md-6" v-model="mahasiswa.nama" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Email:</label>
                        <input type="text" class="form-control col-md-6" v-model="mahasiswa.email" />
                    </div>
                </div>
            </div>
            <br />
            <div class="form-group">
                <button class="btn btn-primary">Add Mahasiswa</button>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                mahasiswa: {}
            }
        },
        methods: {
            addMahasiswa() {
                let uri = 'http://localhost:8000/mahasiswas';
                this.axios.post(uri, this.mahasiswa).then((response) => {
                    this.$router.push({
                        name: 'DisplayMahasiswa'
                    })
                })
            }
        }
    }
</script>