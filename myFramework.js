/**
 * Requirements:
 * - When given a first name, last name and optional language, it generates formal and informal greetings.
 * - Supports English, Spanish and Portuguese
 * - Reusable library: no conflicts
 * - Easy G$() syntax
 * - Supports jQuery
 */

(function (window, jQuery, greetr) {
  "use strict";

  if (window) {
    return greetr(window, jQuery);
  } else {
    console.log("Greetr only runs in a browser! Exiting...");
  }
})(
  typeof window !== "undefined" ? window : null,
  typeof jQuery !== "undefined" ? jQuery : null,
  function greetr(win, jQ) {
    var version = 0.1,
      supportedLanguages = ["en", "es", "pt"],
      Greetr = (G$ = function (
        firstName = "",
        lastName = "",
        language = "en",
        formality = "formal"
      ) {
        console.log("New Greetr built!");
        return new Greetr.init(firstName, lastName, language, formality);
      });

    Greetr.prototype = {
      version: version,
      dics: {
        en: {
          formal: ["Good day", "Welcome", "Hello", "It's nice to meet you"],
          informal: ["Hi", "Hey", "What's up", "Howdy", "How's it going"],
        },
        es: {
          formal: ["¿Como estás?", "¿Cómo ha estado?"],
          informal: ["¿Qué pasa?", "¿Qué hay?", "¿Cómo vas?"],
        },
        pt: {
          formal: ["Olá", "Vem-bindo"],
          informal: ["Eae parça", "Fala mana", "E aí", "Olar"],
        },
      },
      randomGreet: function () {
        return this.dics[this.language][this.formality][
          Math.floor(
            Math.random() * this.dics[this.language][this.formality].length
          )
        ];
      },
      fullName: function () {
        return `${this.firstName} ${this.lastName}`;
      },
      validate: function () {
        if (supportedLanguages.indexOf(this.language) === -1) {
          throw new Error("Invalid language");
        }
      },
      refreshValue: function () {
        this.valueOf =
          this.randomGreet() +
          (this.language !== "es" && this.firstName && this.lastName
            ? ", "
            : " ") +
          (this.firstName + (this.lastName ? " " + this.lastName : ""));
      },
      setLanguage: function (language) {
        this.language = language;
        this.validate();
        this.refreshValue();
        return this;
      },
      new$: function (selector) {
        if (jQ) {
          if (!selector) {
            throw "No selector set";
          }
          return jQ(selector).text(this.valueOf);
        } else {
          throw "Can't use jQuery. Is jQuery really present?";
        }
      },
    };

    //Create instance values here and record to object
    Greetr.init = function (firstName, lastName, language, formality) {
      var self = this;
      self.firstName = firstName;
      self.lastName = lastName;
      self.language = language;
      self.formality = formality;
      self.validate();
      self.refreshValue();
    };

    //Instances will inherit methods and dic
    Greetr.init.prototype = Greetr.prototype;

    //A side effect
    win.Greetr = Greetr;
    win.G$ = Greetr;

    return Greetr;
  }
);
