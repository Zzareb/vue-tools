<script>
export default {
  name: "BreadCalc",
  data() {
    return {
      flour_bread_weight: 0,
      water_bread_weight: 0,
      starter_weight: 0,
      starter_hydration: 0,
      bread_hydration: 60,
      salt_weight: 0,
      total_weight: 0,
      starter_error: false,
      bread_error: false,
      bread_error_message: "Please fill at least bread flour and hydration",
      starter_error_message: "Please fill both values",
      with_starter: false,
    };
  },
  methods: {
    isWithStarter() {
      this.with_starter =
        this.starter_hydration != 0 && this.starter_weight != 0;
    },
    fixAbsValues() {
      this.starter_hydration = Math.abs(this.starter_hydration);
      this.bread_hydration = Math.abs(this.bread_hydration);
      this.flour_bread_weight = Math.abs(this.flour_bread_weight);
      this.water_bread_weight = Math.abs(this.water_bread_weight);
      this.starter_weight = Math.abs(this.starter_weight);
      this.starter_hydration = Math.abs(this.starter_hydration);
      this.bread_hydration = Math.abs(this.bread_hydration);
      this.salt_weight = Math.abs(this.salt_weight);
      this.total_weight = Math.abs(this.total_weight);
    },
    compute() {
      this.fixAbsValues();

      if (this.flour_bread_weight == 0 || this.bread_hydration == 0) {
        this.bread_error = true;
        return;
      }

      if (
        (this.starter_weight == 0 && this.starter_hydration != 0) ||
        (this.starter_weight != 0 && this.starter_hydration == 0)
      ) {
        this.starter_error = true;
        return;
      }

      this.starter_error = false;
      this.bread_error = false;

      if (this.starter_weight != 0 && this.starter_hydration != 0) {
        let starter_flour =
          parseFloat(this.starter_weight) /
          (1 + parseFloat(this.starter_hydration) / 100);
        let starter_water =
          (starter_flour * parseFloat(this.starter_hydration)) / 100;

        this.water_bread_weight = (
          ((parseFloat(this.flour_bread_weight) + starter_flour) *
            parseFloat(this.bread_hydration)) /
            100 -
          starter_water
        ).toFixed(2);

        this.salt_weight =
          (parseFloat(this.flour_bread_weight) + starter_flour) * 0.02;
      } else {
        this.salt_weight = this.flour_bread_weight * 0.02;
        this.water_bread_weight = (
          (parseFloat(this.flour_bread_weight) *
            parseFloat(this.bread_hydration)) /
          100
        ).toFixed(0);
      }

      this.total_weight =
        parseFloat(this.flour_bread_weight) +
        parseFloat(this.water_bread_weight) +
        parseFloat(this.starter_weight) +
        parseFloat(this.salt_weight);
    },
  },
};
</script>

<template>
  <div id="bread_calc">
    <form action="#">
      <div id="starter">
        <h4>Your starter composition</h4>
        <hr />
        <div class="form-row">
          <label for="starter_weight">
            <span class="input_label">Starter weight</span>
            <input
              v-model.lazy="starter_weight"
              @change="isWithStarter"
              id="starter_weight"
              type="text"
              name="starter_weight"
            />
            <span class="unit">g</span>
          </label>
        </div>
        <div v-if="starter_error" class="form-row error">
          {{ starter_error_message }}
        </div>
        <div class="form-row">
          <label for="starter_hydration">
            <span class="input_label">Starter hydration</span>
            <input
              v-model.lazy="starter_hydration"
              @change="isWithStarter"
              id="starter_hydration"
              type="text"
              name="starter_hydration"
            /><span class="unit">%</span>
          </label>
        </div>
      </div>

      <div id="bread">
        <h4>Your bread composition</h4>
        <h5 v-if="with_starter">(what you will add to your starter)</h5>
        <hr />
        <div class="form-row">
          <label for="flour_bread_weight">
            <span class="input_label">Flour weight</span>
            <input
              v-model.lazy="flour_bread_weight"
              id="flour_bread_weight"
              type="text"
              name="flour_bread_weight"
            />
            <span class="unit">g</span>
          </label>
        </div>
        <div class="form-row">
          <label for="water_bread_weight">
            <span class="input_label">Water weight</span>
            <input
              v-model.lazy="water_bread_weight"
              id="water_bread_weight"
              type="text"
              name="water_bread_weight"
              readonly
            />
            <span class="unit">g</span>
          </label>
        </div>
        <div class="form-row">
          <label for="bread_hydration">
            <span class="input_label">Bread hydration</span>
            <input
              id="bread_hydration"
              type="range"
              step="1"
              min="0"
              max="100"
              name="bread_hydration"
              v-model.lazy="bread_hydration"
            />
            <input
              id="hydration_display"
              type="text"
              v-model="bread_hydration"
            />
            <span class="unit">%</span>
          </label>
        </div>
        <div v-if="bread_error" class="form-row error">
          {{ bread_error_message }}
        </div>
      </div>
      <div id="salt">
        <h4>The salt</h4>
        <hr />
        <div class="form-row">
          <label for="salt_weight">
            <span class="input_label">Salt weight</span>
            <input
              v-model.lazy="salt_weight"
              id="salt_weight"
              type="text"
              name="salt_weight"
            />
            <span class="unit">g</span>
          </label>
        </div>
      </div>

      <div id="salt">
        <h4>Total weight</h4>
        <hr />
        <div class="form-row">
          <label for="total_weight">
            <span class="input_label">Total weight</span>
            <input
              v-model.lazy="total_weight"
              id="total_weight"
              type="text"
              name="total_weight"
            />
            <span class="unit">g</span>
          </label>
        </div>
        <div class="form-row">
          <hr />
          <label for="total_weight">
            <button id="compute" v-on:click="compute" type="button">
              Compute
            </button>
          </label>
        </div>
      </div>
    </form>
  </div>
</template>

<style>
body {
  background-color: rgb(31, 53, 53);
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

h4 {
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}
h5 {
  text-align: center;
  margin-bottom: 5px;
}
.form-row label {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.form-row,
.form-row label,
h4,
h5 {
  color: #e6dbdb;
}
.input_label {
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  width: 50%;
}
input {
  width: calc(50% - 1.6rem);
  font-size: 1.2rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
  background-color: #ccc;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
}
input#bread_hydration {
  width: 29%;
  margin-right: 2.5%;
}
input#hydration_display {
  width: 15%;
  font-size: 1.2rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
  position: relative;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
}
.unit {
  font-size: 1.2rem;
  font-weight: bold;
  display: inline-block;
  width: 1.6rem;
  background-color: #ccc;
  height: 41px;
  text-align: right;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3px;
  color: black;
  border-bottom-right-radius: 7px;
  border-top-right-radius: 7px;
  border-left: 1px solid #bababa;
}
#compute {
  font-size: 1.2rem;
  font-weight: bold;
  padding: 8px;
  margin-top: 15px;
  border-radius: 8px;
}
.error {
  color: rgb(114, 50, 50);
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0.5rem;
  text-align: center;
}
</style>
