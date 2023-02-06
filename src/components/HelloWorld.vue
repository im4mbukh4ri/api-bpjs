<template>
  <v-container class="mt-12">
    <h3 class="ml-3">Personal Details</h3>
    <v-container>
      <v-form>
        <v-row>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="jobTitle"
              :error-messages="jobTitleErrors"
              :counter="30"
              label="Wanted Job Title"
              outlined
              required
              @input="$v.jobTitle.$touch()"
              @blur="$v.jobTitle.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <input type="file">
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="firstName"
              :error-messages="firstNameErrors"
              :counter="30"
              label="First Name"
              outlined
              required
              @input="$v.firstName.$touch()"
              @blur="$v.firstName.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="lastName"
              :error-messages="lastNameErrors"
              :counter="30"
              label="Last Name"
              outlined
              required
              @input="$v.lastName.$touch()"
              @blur="$v.lastName.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              :counter="30"
              label="Email"
              outlined
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="phone"
              :error-messages="phoneErrors"
              :counter="20"
              label="Phone"
              required
              outlined
              @input="$v.phone.$touch()"
              @blur="$v.phone.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-select
              v-model="select"
              :items="items"
              item-text="value"
              item-value="id"
              :error-messages="selectErrors"
              label="Country"
              outlined
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            >
            </v-select>
          </v-col>
          <!-- <v-col cols="12" md="6">
            <v-checkbox
              v-model="checkbox"
              :error-messages="checkboxErrors"
              label="Do you agree?"
              required
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
            ></v-checkbox>
          </v-col> -->
        </v-row>
        <v-btn class="mr-4" @click="submit"> submit </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </v-form>
    </v-container>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'HelloWordPage',
  mixins: [validationMixin],

  validations: {
    jobTitle: {
      required,
      maxLength: maxLength(30)
    },
    firstName: {
      required,
      maxLength: maxLength(30)
    },
    lastName: {
      required,
      maxLength: maxLength(30)
    },
    photo: {
      required
    },
    email: {
      required,
      maxLength: maxLength(30),
      email
    },
    selectCountry: {
      required
    },
    phone: {
      required,
      maxLength: maxLength(20)
    },
    select: {
      required
    }
    // checkbox: {
    //   checked (val) {
    //     return val
    //   }
    // }
  },

  data: () => ({
    jobTitle: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    photo: '',
    country: '',
    select: null,
    items: [{
      id: 1,
      value: 'Indonesia'
    }, {
      id: 2,
      value: 'Inggris'
    }]
    // checkbox: false
  }),

  computed: {

    jobTitleErrors () {
      const errors = []
      if (!this.$v.jobTitle.$dirty) { return errors }
      !this.$v.jobTitle.maxLength &&
        errors.push('Job Title must be at most 20 characters long')
      !this.$v.jobTitle.required && errors.push('Job Title is required.')
      return errors
    },
    firstNameErrors () {
      const errors = []
      if (!this.$v.firstName.$dirty) { return errors }
      !this.$v.firstName.maxLength &&
        errors.push('First Name must be at most 10 characters long')
      !this.$v.firstName.required && errors.push('First Name is required.')
      return errors
    },
    lastNameErrors () {
      const errors = []
      if (!this.$v.lastName.$dirty) return errors
      !this.$v.lastName.maxLength &&
        errors.push('Last Name must be at most 10 characters long')
      !this.$v.lastName.required && errors.push('Last Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    phoneErrors () {
      const errors = []
      if (!this.$v.phone.$dirty) return errors
      !this.$v.phone.maxLength && errors.push('Phone must be at most 10 characters long')
      !this.$v.phone.required && errors.push('Phone is required')
      return errors
    },
    // checkboxErrors () {
    //   const errors = []
    //   if (!this.$v.checkbox.$dirty) {
    //     return errors
    //   }
    //   !this.$v.checkbox.checked && errors.push('You must agree to continue!')
    //   return errors
    // },
    selectErrors () {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Country is required')
      return errors
    }

  },

  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()

      this.jobTitle = ''
      this.firstName = ''
      this.lastName = ''
      this.email = ''
      this.phone = ''
      this.select = null
      // this.checkbox = false
    }
  }
}
</script>
