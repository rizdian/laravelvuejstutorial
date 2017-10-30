<template>
    <div>
        <h1>Update Mahasiswa</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'DisplayMahasiswa' }" class="btn btn-success">Return to Mahasiswas</router-link></div>
        </div>

        <form v-on:submit.prevent="updateMahasiswa">
            <div class="form-group">
                <label>Mahasiswa Nim</label>
                <input type="text" class="form-control" v-model="mahasiswa.nim">
            </div>

            <div class="form-group">
                <label>Mahasiswa Name</label>
                <input type="text" class="form-control" v-model="mahasiswa.nama">
            </div>

            <div class="form-group">
                <label name="product_price">Mahasiswa Email</label>
                <input type="text" class="form-control" v-model="mahasiswa.email">
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                mahasiswa:{}
            }
        },

        created: function(){
            this.getMahasiswa();
        },

        methods: {
            getMahasiswa()
            {
              let uri = `http://localhost:8000/mahasiswas/${this.$route.params.id}/edit`;
                this.axios.get(uri).then((response) => {
                    this.mahasiswa = response.data;
                });
            },

            updateMahasiswa()
            {
              let uri = 'http://localhost:8000/mahasiswas/'+this.$route.params.id;
                this.axios.patch(uri, this.mahasiswa).then((response) => {
                  this.$router.push({name: 'DisplayMahasiswa'});
                });
            }
        }
    }
</script>