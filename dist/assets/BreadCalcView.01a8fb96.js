import {
  _ as u,
  o as h,
  c as d,
  a as t,
  w as s,
  v as a,
  t as _,
  b as n,
} from "./index.9254e28e.js";
const g = {
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
        starter_error: !1,
        bread_error: !1,
        bread_error_message: "Please fill at least bread flour and hydration",
        starter_error_message: "Please fill both values",
        with_starter: !1,
      };
    },
    methods: {
      isWithStarter() {
        this.with_starter =
          this.starter_hydration != 0 && this.starter_weight != 0;
      },
      fixAbsValues() {
        (this.starter_hydration = Math.abs(this.starter_hydration)),
          (this.bread_hydration = Math.abs(this.bread_hydration)),
          (this.flour_bread_weight = Math.abs(this.flour_bread_weight)),
          (this.water_bread_weight = Math.abs(this.water_bread_weight)),
          (this.starter_weight = Math.abs(this.starter_weight)),
          (this.starter_hydration = Math.abs(this.starter_hydration)),
          (this.bread_hydration = Math.abs(this.bread_hydration)),
          (this.salt_weight = Math.abs(this.salt_weight)),
          (this.total_weight = Math.abs(this.total_weight));
      },
      compute() {
        if (
          (this.fixAbsValues(),
          this.flour_bread_weight == 0 || this.bread_hydration == 0)
        ) {
          this.bread_error = !0;
          return;
        }
        if (
          (this.starter_weight == 0 && this.starter_hydration != 0) ||
          (this.starter_weight != 0 && this.starter_hydration == 0)
        ) {
          this.starter_error = !0;
          return;
        }
        if (
          ((this.starter_error = !1),
          (this.bread_error = !1),
          this.starter_weight != 0 && this.starter_hydration != 0)
        ) {
          let l =
              parseFloat(this.starter_weight) /
              (1 + parseFloat(this.starter_hydration) / 100),
            e = (l * parseFloat(this.starter_hydration)) / 100;
          (this.water_bread_weight = (
            ((parseFloat(this.flour_bread_weight) + l) *
              parseFloat(this.bread_hydration)) /
              100 -
            e
          ).toFixed(2)),
            (this.salt_weight =
              (parseFloat(this.flour_bread_weight) + l) * 0.02);
        } else
          (this.salt_weight = this.flour_bread_weight * 0.02),
            (this.water_bread_weight = (
              (parseFloat(this.flour_bread_weight) *
                parseFloat(this.bread_hydration)) /
              100
            ).toFixed(0));
        this.total_weight =
          parseFloat(this.flour_bread_weight) +
          parseFloat(this.water_bread_weight) +
          parseFloat(this.starter_weight) +
          parseFloat(this.salt_weight);
      },
    },
  },
  b = { id: "bread_calc" },
  w = { action: "#" },
  p = { id: "starter" },
  c = t("h4", null, "Your starter composition", -1),
  m = t("hr", null, null, -1),
  f = { class: "form-row" },
  y = { for: "starter_weight" },
  x = t("span", { class: "input_label" }, "Starter weight", -1),
  v = t("span", { class: "unit" }, "g", -1),
  F = { key: 0, class: "form-row error" },
  z = { class: "form-row" },
  V = { for: "starter_hydration" },
  k = t("span", { class: "input_label" }, "Starter hydration", -1),
  M = t("span", { class: "unit" }, "%", -1),
  S = { id: "bread" },
  C = t("h4", null, "Your bread composition", -1),
  U = { key: 0 },
  B = t("hr", null, null, -1),
  W = { class: "form-row" },
  T = { for: "flour_bread_weight" },
  j = t("span", { class: "input_label" }, "Flour weight", -1),
  A = t("span", { class: "unit" }, "g", -1),
  D = { class: "form-row" },
  N = { for: "water_bread_weight" },
  P = t("span", { class: "input_label" }, "Water weight", -1),
  Y = t("span", { class: "unit" }, "g", -1),
  E = { class: "form-row" },
  q = { for: "bread_hydration" },
  G = t("span", { class: "input_label" }, "Bread hydration", -1),
  H = t("span", { class: "unit" }, "%", -1),
  I = { key: 1, class: "form-row error" },
  J = { id: "salt" },
  K = t("h4", null, "The salt", -1),
  L = t("hr", null, null, -1),
  O = { class: "form-row" },
  Q = { for: "salt_weight" },
  R = t("span", { class: "input_label" }, "Salt weight", -1),
  X = t("span", { class: "unit" }, "g", -1),
  Z = { id: "salt" },
  $ = t("h4", null, "Total weight", -1),
  tt = t("hr", null, null, -1),
  et = { class: "form-row" },
  rt = { for: "total_weight" },
  it = t("span", { class: "input_label" }, "Total weight", -1),
  st = t("span", { class: "unit" }, "g", -1),
  at = { class: "form-row" },
  ot = t("hr", null, null, -1),
  lt = { for: "total_weight" };
function ht(l, e, dt, nt, r, o) {
  return (
    h(),
    d("div", b, [
      t("form", w, [
        t("div", p, [
          c,
          m,
          t("div", f, [
            t("label", y, [
              x,
              s(
                t(
                  "input",
                  {
                    "onUpdate:modelValue":
                      e[0] || (e[0] = (i) => (r.starter_weight = i)),
                    onChange:
                      e[1] ||
                      (e[1] = (...i) =>
                        o.isWithStarter && o.isWithStarter(...i)),
                    id: "starter_weight",
                    type: "text",
                    name: "starter_weight",
                  },
                  null,
                  544
                ),
                [[a, r.starter_weight, void 0, { lazy: !0 }]]
              ),
              v,
            ]),
          ]),
          r.starter_error
            ? (h(), d("div", F, _(r.starter_error_message), 1))
            : n("", !0),
          t("div", z, [
            t("label", V, [
              k,
              s(
                t(
                  "input",
                  {
                    "onUpdate:modelValue":
                      e[2] || (e[2] = (i) => (r.starter_hydration = i)),
                    onChange:
                      e[3] ||
                      (e[3] = (...i) =>
                        o.isWithStarter && o.isWithStarter(...i)),
                    id: "starter_hydration",
                    type: "text",
                    name: "starter_hydration",
                  },
                  null,
                  544
                ),
                [[a, r.starter_hydration, void 0, { lazy: !0 }]]
              ),
              M,
            ]),
          ]),
        ]),
        t("div", S, [
          C,
          r.with_starter
            ? (h(), d("h5", U, "(what you will add to your starter)"))
            : n("", !0),
          B,
          t("div", W, [
            t("label", T, [
              j,
              s(
                t(
                  "input",
                  {
                    "onUpdate:modelValue":
                      e[4] || (e[4] = (i) => (r.flour_bread_weight = i)),
                    id: "flour_bread_weight",
                    type: "text",
                    name: "flour_bread_weight",
                  },
                  null,
                  512
                ),
                [[a, r.flour_bread_weight, void 0, { lazy: !0 }]]
              ),
              A,
            ]),
          ]),
          t("div", D, [
            t("label", N, [
              P,
              s(
                t(
                  "input",
                  {
                    "onUpdate:modelValue":
                      e[5] || (e[5] = (i) => (r.water_bread_weight = i)),
                    id: "water_bread_weight",
                    type: "text",
                    name: "water_bread_weight",
                    readonly: "",
                  },
                  null,
                  512
                ),
                [[a, r.water_bread_weight, void 0, { lazy: !0 }]]
              ),
              Y,
            ]),
          ]),
          t("div", E, [
            t("label", q, [
              G,
              s(
                t(
                  "input",
                  {
                    id: "bread_hydration",
                    type: "range",
                    step: "1",
                    min: "0",
                    max: "100",
                    name: "bread_hydration",
                    "onUpdate:modelValue":
                      e[6] || (e[6] = (i) => (r.bread_hydration = i)),
                  },
                  null,
                  512
                ),
                [[a, r.bread_hydration, void 0, { lazy: !0 }]]
              ),
              s(
                t(
                  "input",
                  {
                    id: "hydration_display",
                    type: "text",
                    "onUpdate:modelValue":
                      e[7] || (e[7] = (i) => (r.bread_hydration = i)),
                  },
                  null,
                  512
                ),
                [[a, r.bread_hydration]]
              ),
              H,
            ]),
          ]),
          r.bread_error
            ? (h(), d("div", I, _(r.bread_error_message), 1))
            : n("", !0),
        ]),
        t("div", J, [
          K,
          L,
          t("div", O, [
            t("label", Q, [
              R,
              s(
                t(
                  "input",
                  {
                    "onUpdate:modelValue":
                      e[8] || (e[8] = (i) => (r.salt_weight = i)),
                    id: "salt_weight",
                    type: "text",
                    name: "salt_weight",
                  },
                  null,
                  512
                ),
                [[a, r.salt_weight, void 0, { lazy: !0 }]]
              ),
              X,
            ]),
          ]),
        ]),
        t("div", Z, [
          $,
          tt,
          t("div", et, [
            t("label", rt, [
              it,
              s(
                t(
                  "input",
                  {
                    "onUpdate:modelValue":
                      e[9] || (e[9] = (i) => (r.total_weight = i)),
                    id: "total_weight",
                    type: "text",
                    name: "total_weight",
                  },
                  null,
                  512
                ),
                [[a, r.total_weight, void 0, { lazy: !0 }]]
              ),
              st,
            ]),
          ]),
          t("div", at, [
            ot,
            t("label", lt, [
              t(
                "button",
                {
                  id: "compute",
                  onClick:
                    e[10] || (e[10] = (...i) => o.compute && o.compute(...i)),
                  type: "button",
                },
                "Compute"
              ),
            ]),
          ]),
        ]),
      ]),
    ])
  );
}
var ut = u(g, [["render", ht]]);
export { ut as default };
