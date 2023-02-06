<template>
  <v-container class="mt-12">
    <h3 class="ml-3">Personal Details</h3>
    <v-container>
      <v-form>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.jobTitle"
              :error-messages="jobTitleErrors"
              :counter="30"
              label="Wanted Job Title"
              outlined
              required
              @input="$v.form.jobTitle.$touch()"
              @blur="$v.form.jobTitle.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-img
            max-height="100"
            max-width="100"
            :src="form.photo"
            @click="chooseImage"
          ></v-img>
          <input type="file" class="file-input" ref="fileInput" accept="image/*" label="Select Image" @change="onSelectFile">
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.firstName"
              :error-messages="firstNameErrors"
              :counter="30"
              label="First Name"
              outlined
              required
              @input="$v.form.firstName.$touch()"
              @blur="$v.form.firstName.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.lastName"
              :error-messages="lastNameErrors"
              :counter="30"
              label="Last Name"
              outlined
              required
              @input="$v.form.lastName.$touch()"
              @blur="$v.form.lastName.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.email"
              :error-messages="emailErrors"
              :counter="30"
              label="Email"
              outlined
              required
              @input="$v.form.email.$touch()"
              @blur="$v.form.email.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.phone"
              :error-messages="phoneErrors"
              :counter="20"
              label="Phone"
              required
              outlined
              @input="$v.form.phone.$touch()"
              @blur="$v.form.phone.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-autocomplete
              v-model="form.countryId"
              :items="item_country"
              item-text="name"
              item-value="code"
              :error-messages="selectCountryErrors"
              label="Country"
              outlined
              required
              @change="getCity"
            >
            </v-autocomplete>
          </v-col>
          <v-col cols="12" md="6">
            <v-autocomplete
              v-model="form.cityId"
              :items="item_city"
              item-text="name"
              item-value="id"
              :error-messages="selectCityErrors"
              label="City"
              outlined
              required
            >
            </v-autocomplete>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.address"
              :error-messages="addressErrors"
              :counter="20"
              label="Address"
              required
              outlined
              @input="$v.form.address.$touch()"
              @blur="$v.form.address.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.postalCode"
              :error-messages="postalCodeErrors"
              :counter="20"
              label="Postal Code"
              required
              outlined
              @input="$v.form.postalCode.$touch()"
              @blur="$v.form.postalCode.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.placeOfBirth"
              :error-messages="placeOfBirthErrors"
              :counter="20"
              label="Place Of Birth"
              required
              outlined
              @input="$v.form.placeOfBirth.$touch()"
              @blur="$v.form.placeOfBirth.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.placeOfBirth"
              :error-messages="placeOfBirthErrors"
              :counter="20"
              label="Place Of Birth"
              required
              outlined
              @input="$v.form.placeOfBirth.$touch()"
              @blur="$v.form.placeOfBirth.$touch()"
            ></v-text-field>
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
          <v-col cols="12" md="12">
            <h2>Profesional Summary</h2>
            <tiptap-vuetify
      v-model="content"
      :extensions="extensions"
    />
          </v-col>
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
import AuthenticationService from '@/services/AuthenticationService'
import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History } from 'tiptap-vuetify'

export default {
  name: 'HomePage',
  mixins: [validationMixin],
  components: { TiptapVuetify },
  validations: {
    form: {
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
      countryId: {
        required
      },
      cityId: {
        required
      },
      address: {
        required
      },
      postalCode: {
        required
      },
      placeOfBirth: {
        required
      },
      dateOfBirth: {
        required
      }
    // checkbox: {
    //   checked (val) {
    //     return val
    //   }
    // }
    }

  },

  data: () => ({
    extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [Heading, {
        options: {
          levels: [1, 2, 3]
        }
      }],
      Bold,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak
    ],
    // starting editor's content
    content: `
      <h1>Yay Headlines!</h1>
      <p>All these <strong>cool tags</strong> are working now.</p>
    `,
    form: {
      jobTitle: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      countryId: null,
      cityId: null,
      photo: 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg',
      placeOfBirth: '',
      dateOfBirth: '',
      address: '',
      postalCode: '',
      password: 12345678,
      roleId: 1,
      skills: []
    },
    item_country: [],
    item_city: []
  }),
  computed: {
    jobTitleErrors () {
      const errors = []
      if (!this.$v.form.jobTitle.$dirty) {
        return errors
      }
      !this.$v.form.jobTitle.maxLength && errors.push('Job Title must be at most 20 characters long')
      !this.$v.form.jobTitle.required && errors.push('Job Title is required.')
      return errors
    },
    firstNameErrors () {
      const errors = []
      if (!this.$v.form.firstName.$dirty) {
        return errors
      }
      !this.$v.form.firstName.maxLength &&
        errors.push('First Name must be at most 10 characters long')
      !this.$v.form.firstName.required && errors.push('First Name is required.')
      return errors
    },
    lastNameErrors () {
      const errors = []
      if (!this.$v.form.lastName.$dirty) return errors
      !this.$v.form.lastName.maxLength &&
        errors.push('Last Name must be at most 10 characters long')
      !this.$v.form.lastName.required && errors.push('Last Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.form.email.$dirty) return errors
      !this.$v.form.email.email && errors.push('Must be valid e-mail')
      !this.$v.form.email.required && errors.push('E-mail is required')
      return errors
    },
    phoneErrors () {
      const errors = []
      if (!this.$v.form.phone.$dirty) return errors
      !this.$v.form.phone.maxLength &&
        errors.push('Phone must be at most 10 characters long')
      !this.$v.form.phone.required && errors.push('Phone is required')
      return errors
    },
    selectCountryErrors () {
      const errors = []
      if (!this.$v.form.countryId.$dirty) return errors
      !this.$v.form.countryId.required && errors.push('Country is required')
      return errors
    },
    selectCityErrors () {
      const errors = []
      if (!this.$v.form.cityId.$dirty) return errors
      !this.$v.form.cityId.required && errors.push('City is required')
      return errors
    },
    addressErrors () {
      const errors = []
      if (!this.$v.form.address.$dirty) return errors
      !this.$v.form.address.required && errors.push('Address is required')
      return errors
    },
    postalCodeErrors () {
      const errors = []
      if (!this.$v.form.postalCode.$dirty) return errors
      !this.$v.form.postalCode.required && errors.push('Postal Code is required')
      return errors
    },
    placeOfBirthErrors () {
      const errors = []
      if (!this.$v.form.placeOfBirth.$dirty) return errors
      !this.$v.form.placeOfBirth.required && errors.push('Place Of Birth is required')
      return errors
    },
    dateOfBirthErrors () {
      const errors = []
      if (!this.$v.form.dateOfBirth.$dirty) return errors
      !this.$v.form.dateOfBirth.required && errors.push('Date Of Birth is required')
      return errors
    }
  },
  mounted () {
    this.getCountry()
  },
  methods: {
    chooseImage () {
      this.$refs.fileInput.click()
    },
    onSelectFile ($event) {
      const image = $event.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = e => {
        this.form.photo = e.target.result
        this.$forceUpdate()
      }

      // this.currentImage = image
      // this.photo = URL.createObjectURL(this.currentImage)
      // const input = this.$refs.fileInput
      // const files = input.files
      // if (files && files[0]) {
      //   const reader = new FileReader()
      //   reader.onload = e => {
      //     this.photo = e.target.result
      //   }
      //   reader.readAsDataURL(files[0])
      //   this.$emit('input', files[0])
      // }
    },
    async getCountry () {
      const response = await AuthenticationService.listCountry()
      // console.log(JSON.stringify(response.data))
      this.item_country = response.data.data
    },
    async getCity () {
      const response = await AuthenticationService.listCity({ country: this.form.countryId })
      console.log(JSON.stringify(response.data))
      this.item_city = response.data.data
    },
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.form.jobTitle = ''
      this.form.firstName = ''
      this.form.lastName = ''
      this.form.email = ''
      this.form.phone = ''
      this.form.address = ''
      this.form.postalCode = ''
      this.form.photo = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'
      this.form.placeOfBirth = ''
      this.form.dateOfBirth = ''
      this.form.countryId = null
      this.form.cityId = null
    }
  }
}
</script>
<style>
.file-input {
  display: none;
}
</style>
