<template>
    <div class="wrapper">
        <div class="form-info">
            <h2>Form info:</h2>
            <h3>Data from pinia state:</h3>
            <p><span class="info-name">Full Name:</span> {{ formInfoStore.info.fullName }}</p>
            <p><span class="info-name">Gender:</span> {{ formInfoStore.info.gender }}</p>
            <p><span class="info-name">Allergies:</span>
                {{ formInfoStore.info.allergyList.length > 0 ? formInfoStore.info.allergyList : '' }}</p>
            <p><span class="info-name">Preferred view:</span> {{ formInfoStore.info.preferredView }}</p>
            <p><span class="info-name">Requests:</span> {{ formInfoStore.info.requests }}</p>
            <h3>Data from an emitted event:</h3>
            <p><span class="info-name">Full Name:</span> {{ formInfo.fullName }}</p>
            <p><span class="info-name">Gender:</span> {{ formInfo.gender }}</p>
            <p><span class="info-name">Allergies:</span> {{ formInfo.allergyList }}</p>
            <p><span class="info-name">Preferred view:</span> {{ formInfo.preferredView }}</p>
            <p><span class="info-name">Requests:</span> {{ formInfo.requests }}</p>
        </div>

        <div class="customer-form">
            <the-form @form-submitted="onFormSubmission"></the-form>

        </div>
    </div>

</template>

<script>
import TheForm from './TheForm.vue'
import { useFormInfoStore } from '../stores/formInfo.js'

export default {

    components: {
        TheForm
    },

    data() {
        return {
            formInfoStore: useFormInfoStore(),
            formInfo: "",
        }
    },

    methods: {
        onFormSubmission(data) {
            this.formInfo = data;
        }
    }
}
</script>

<style scoped>
 .info-name {
     font-weight: 500;
 }

 .wrapper {
     box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
     display: flex;
     flex-direction: column;
     height: 100%;
     width: 100%;
 }

 .form-info,
 .customer-form {
     flex: 1;
     padding: 1rem;
 }

 .form-info {
     background-color: #F2F2F2;

 }

 .customer-form {
     background-color: #fff;

 }


 @media (min-width: 768px) {
     .wrapper {
         flex-direction: row-reverse;
     }

     .form-info,
     .customer-form {
         padding: 2rem;
         width: 50%;
     }
 }
</style>