<template>
    <form @submit.prevent="onFormSubmission">
        <h2>The Form:</h2>
        <div class="form-group">
            <label for="full-name">Name</label>
            <input
                v-model="fullName"
                id="full-name"
                type="text"
            />
            <p>{{ fullName }}</p>
        </div>

        <div class="form-group">
            <p class="form-group-name">Gender</p>
            <div>
                <input
                    v-model="gender"
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                />
                <label for="male">Male</label>
            </div>

            <div>
                <input
                    v-model="gender"
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                />
                <label for="female">Female</label>
            </div>
            <p>{{ gender }}</p>
        </div>

        <div class="form-group">
            <p class="form-group-name">Allergies</p>

            <div>
                <input
                    v-model="allergyList"
                    type="checkbox"
                    id="peanuts"
                    name="allergies"
                    value="Peanuts"
                />
                <label for="peanuts">Peanuts</label>
            </div>

            <div>
                <input
                    v-model="allergyList"
                    type="checkbox"
                    id="dustMites"
                    name="allergies"
                    value="Dust mites"
                />
                <label for="dustMites">Dust mites</label>
            </div>

            <div>
                <input
                    v-model="allergyList"
                    type="checkbox"
                    id="strawberries"
                    name="allergies"
                    value="Strawberries"
                />
                <label for="strawberries">Strawberries</label>
            </div>
            <p>{{ allergyList.length > 0 ? allergyList : '' }}</p>
        </div>

        <div class="form-group">
            <label for="view-select">Choose your preferred view</label>

            <select
                v-model="preferredView"
                name="preferred-view"
                id="view-select"
            >
                <option value="sea-view">Sea view</option>
                <option value="forrest-view">Forrest view</option>
                <option value="city-view">City view</option>

            </select>

            <p>{{ preferredView }}</p>
        </div>

        <div class="form-group">
            <label for="requests">Your questions or any special requests</label>

            <textarea
                v-model="requests"
                id="requests"
                name="requests"
                rows="5"
                cols="33"
            >

</textarea>
            <p>{{ requests }}</p>
        </div>
        <button type="submit">Submit</button>

    </form>
</template>

<script>

import { useFormInfoStore } from '../stores/formInfo.js'


export default {

    emits: ['formSubmitted'],

    data() {
        return {
            formInfoStore: useFormInfoStore(),
            fullName: '',
            gender: '',
            allergyList: [],
            preferredView: '',
            requests: '',
        }
    },

    computed: {

        formInfo() {
            return {
                fullName: this.fullName,
                gender: this.gender,
                allergyList: this.allergyList,
                preferredView: this.preferredView,
                requests: this.requests,
            }
        }
    },
    methods: {
        onFormSubmission() {
            this.$emit('formSubmitted', this.formInfo)
            this.formInfoStore.updateInfo(this.formInfo)

        }
    },

}
</script>

<style>
.form-group>label,
.form-group-name {
    font-weight: 500;
}

.form-group>label {
    margin-bottom: 1rem;
}

form {
    display: flex;
    flex-direction: column;
}

form button {
    margin-top: 1rem;

}

.form-group {
    display: flex;
    flex-direction: column;
}
</style>