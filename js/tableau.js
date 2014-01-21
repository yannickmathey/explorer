function parcourirTableau(cible, type) {


    styleCaractere = function(classe, nom, pack, italique) {
        this.classe = classe;
        this.nom = nom;
        this.pack = pack;
    };


    window.tableau = [  

        new styleCaractere("C1G1", "Panorama ExtraCondensed-Thin", "Panorama ExtraCondensed"),
        new styleCaractere("C1G2", "Panorama ExtraCondensed-ExtraLight", "Panorama ExtraCondensed"),
        new styleCaractere("C1G3", "Panorama ExtraCondensed-Light", "Panorama ExtraCondensed"),
        new styleCaractere("C1G4", "Panorama ExtraCondensed-Regular", "Panorama ExtraCondensed"),
        new styleCaractere("C1G5", "Panorama ExtraCondensed-SemiBold", "Panorama ExtraCondensed"),
        new styleCaractere("C1G6", "Panorama ExtraCondensed-Bold", "Panorama ExtraCondensed"),
        new styleCaractere("C1G7", "Panorama ExtraCondensed-Black", "Panorama ExtraCondensed"),
        new styleCaractere("C1G8", "Panorama ExtraCondensed-Ultra", "Panorama ExtraCondensed"),

        new styleCaractere("C2G1", "Panorama SemiCondensed-Thin", "Panorama SemiCondensed"),
        new styleCaractere("C2G2", "Panorama SemiCondensed-ExtraLight", "Panorama SemiCondensed"),
        new styleCaractere("C2G3", "Panorama SemiCondensed-Light", "Panorama SemiCondensed"),
        new styleCaractere("C2G4", "Panorama SemiCondensed-Regular", "Panorama SemiCondensed"),
        new styleCaractere("C2G5", "Panorama SemiCondensed-SemiBold", "Panorama SemiCondensed", "Panorama SemiCondensed-SemiBoldItalic"),
        new styleCaractere("C2G6", "Panorama SemiCondensed-Bold", "Panorama SemiCondensed", "Panorama SemiCondensed-BoldItalic"),
        new styleCaractere("C2G7", "Panorama SemiCondensed-Black", "Panorama SemiCondensed", "Panorama SemiCondensed-BlackItalic"),
        new styleCaractere("C2G8", "Panorama SemiCondensed-Ultra", "Panorama SemiCondensed", "Panorama SemiCondensed-UltraItalic"),

        new styleCaractere("C3G1", "Panorama Condensed-Thin", "Panorama Condensed"),
        new styleCaractere("C3G2", "Panorama Condensed-ExtraLight", "Panorama Condensed"),
        new styleCaractere("C3G3", "Panorama Condensed-Light", "Panorama Condensed"),
        new styleCaractere("C3G4", "Panorama Condensed-Regular", "Panorama Condensed"),
        new styleCaractere("C3G5", "Panorama Condensed-SemiBold", "Panorama Condensed"),
        new styleCaractere("C3G6", "Panorama Condensed-Bold", "Panorama Condensed"),
        new styleCaractere("C3G7", "Panorama Condensed-Black", "Panorama Condensed"),
        new styleCaractere("C3G8", "Panorama Condensed-Ultra", "Panorama Condensed"),

        new styleCaractere("C4G1", "Panorama Thin", "Panorama"),
        new styleCaractere("C4G2", "Panorama ExtraLight", "Panorama"),
        new styleCaractere("C4G3", "Panorama Light", "Panorama"),
        new styleCaractere("C4G4", "Panorama Regular", "Panorama"),
        new styleCaractere("C4G5", "Panorama SemiBold", "Panorama"),
        new styleCaractere("C4G6", "Panorama Bold", "Panorama"),
        new styleCaractere("C4G7", "Panorama Black", "Panorama"),
        new styleCaractere("C4G8", "Panorama Ultra", "Panorama"),

        new styleCaractere("C5G1", "Panorama Wide-Thin", "Panorama Wide"),
        new styleCaractere("C5G2", "Panorama Wide-ExtraLight", "Panorama Wide"),
        new styleCaractere("C5G3", "Panorama Wide-Light", "Panorama Wide"),
        new styleCaractere("C5G4", "Panorama Wide-Regular", "Panorama Wide"),
        new styleCaractere("C5G5", "Panorama Wide-SemiBold", "Panorama Wide"),
        new styleCaractere("C5G6", "Panorama Wide-Bold", "Panorama Wide"),
        new styleCaractere("C5G7", "Panorama Wide-Black", "Panorama Wide"),
        new styleCaractere("C5G8", "Panorama Wide-Ultra", "Panorama Wide"),

        new styleCaractere("C6G1", "Panorama ExtraExtended-Thin", "Panorama ExtraExtended"),
        new styleCaractere("C6G2", "Panorama ExtraExtended-ExtraLight", "Panorama ExtraExtended"),
        new styleCaractere("C6G3", "Panorama ExtraExtended-Light", "Panorama ExtraExtended"),
        new styleCaractere("C6G4", "Panorama ExtraExtended-Regular", "Panorama ExtraExtended"),
        new styleCaractere("C6G5", "Panorama ExtraExtended-SemiBold", "Panorama ExtraExtended"),
        new styleCaractere("C6G6", "Panorama ExtraExtended-Bold", "Panorama ExtraExtended"),
        new styleCaractere("C6G7", "Panorama ExtraExtended-Black", "Panorama ExtraExtended"),
        new styleCaractere("C6G8", "Panorama ExtraExtended-Ultra", "Panorama ExtraExtended"),

        // italic

        new styleCaractere("C1G1I", "Panorama ExtraCondensed-Thin Italic", "Panorama ExtraCondensed"),
        new styleCaractere("C1G2I", "Panorama ExtraCondensed-ExtraLight Italic", "Panorama ExtraCondensed"),
        new styleCaractere("C1G3I", "Panorama ExtraCondensed-Light Italic", "Panorama ExtraCondensed"),
        new styleCaractere("C1G4I", "Panorama ExtraCondensed Italic", "Panorama ExtraCondensed"),
        new styleCaractere("C1G5I", "Panorama ExtraCondensed-SemiBold Italic", "Panorama ExtraCondensed"),
        new styleCaractere("C1G6I", "Panorama ExtraCondensed-Bold Italic", "Panorama ExtraCondensed"),
        new styleCaractere("C1G7I", "Panorama ExtraCondensed-Black Italic", "Panorama ExtraCondensed"),
        new styleCaractere("C1G8I", "Panorama ExtraCondensed-Ultra Italic", "Panorama ExtraCondensed"),

        new styleCaractere("C2G1I", "Panorama SemiCondensed-Thin Italic", "Panorama SemiCondensed"),
        new styleCaractere("C2G2I", "Panorama SemiCondensed-ExtraLight Italic", "Panorama SemiCondensed"),
        new styleCaractere("C2G3I", "Panorama SemiCondensed-Light Italic", "Panorama SemiCondensed"),
        new styleCaractere("C2G4I", "Panorama SemiCondensed Italic", "Panorama SemiCondensed"),
        new styleCaractere("C2G5I", "Panorama SemiCondensed-SemiBold Italic", "Panorama SemiCondensed"),
        new styleCaractere("C2G6I", "Panorama SemiCondensed-Bold Italic", "Panorama SemiCondensed"),
        new styleCaractere("C2G7I", "Panorama SemiCondensed-Black Italic", "Panorama SemiCondensed"),
        new styleCaractere("C2G8I", "Panorama SemiCondensed-Ultra Italic", "Panorama SemiCondensed"),

        new styleCaractere("C3G1I", "Panorama Condensed-Thin Italic", "Panorama Condensed"),
        new styleCaractere("C3G2I", "Panorama Condensed-ExtraLight Italic", "Panorama Condensed"),
        new styleCaractere("C3G3I", "Panorama Condensed-Light Italic", "Panorama Condensed"),
        new styleCaractere("C3G4I", "Panorama Condensed Italic", "Panorama Condensed"),
        new styleCaractere("C3G5I", "Panorama Condensed-SemiBold Italic", "Panorama Condensed"),
        new styleCaractere("C3G6I", "Panorama Condensed-Bold Italic", "Panorama Condensed"),
        new styleCaractere("C3G7I", "Panorama Condensed-Black Italic", "Panorama Condensed"),
        new styleCaractere("C3G8I", "Panorama Condensed-Ultra Italic", "Panorama Condensed"),

        new styleCaractere("C4G1I", "Panorama Thin Italic", "Panorama"),
        new styleCaractere("C4G2I", "Panorama ExtraLight Italic", "Panorama"),
        new styleCaractere("C4G3I", "Panorama Light Italic", "Panorama"),
        new styleCaractere("C4G4I", "Panorama  Italic", "Panorama"),
        new styleCaractere("C4G5I", "Panorama SemiBold Italic", "Panorama"),
        new styleCaractere("C4G6I", "Panorama Bold Italic", "Panorama"),
        new styleCaractere("C4G7I", "Panorama Black Italic", "Panorama"),
        new styleCaractere("C4G8I", "Panorama Ultra Italic", "Panorama"),

        new styleCaractere("C5G1I", "Panorama Wide-Thin Italic", "Panorama Wide"),
        new styleCaractere("C5G2I", "Panorama Wide-ExtraLight Italic", "Panorama Wide"),
        new styleCaractere("C5G3I", "Panorama Wide-Light Italic", "Panorama Wide"),
        new styleCaractere("C5G4I", "Panorama Wide Italic", "Panorama Wide"),
        new styleCaractere("C5G5I", "Panorama Wide-SemiBold Italic", "Panorama Wide"),
        new styleCaractere("C5G6I", "Panorama Wide-Bold Italic", "Panorama Wide"),
        new styleCaractere("C5G7I", "Panorama Wide-Black Italic", "Panorama Wide"),
        new styleCaractere("C5G8I", "Panorama Wide-Ultra Italic", "Panorama Wide"),

        new styleCaractere("C6G1I", "Panorama ExtraExtended-Thin Italic", "Panorama ExtraExtended"),
        new styleCaractere("C6G2I", "Panorama ExtraExtended-ExtraLight Italic", "Panorama ExtraExtended"),
        new styleCaractere("C6G3I", "Panorama ExtraExtended-Light Italic", "Panorama ExtraExtended"),
        new styleCaractere("C6G4I", "Panorama ExtraExtended Italic", "Panorama ExtraExtended"),
        new styleCaractere("C6G5I", "Panorama ExtraExtended-SemiBold Italic", "Panorama ExtraExtended"),
        new styleCaractere("C6G6I", "Panorama ExtraExtended-Bold Italic", "Panorama ExtraExtended"),
        new styleCaractere("C6G7I", "Panorama ExtraExtended-Black Italic", "Panorama ExtraExtended"),
        new styleCaractere("C6G8I", "Panorama ExtraExtended-Ultra Italic", "Panorama ExtraExtended")

    ];


    var utils = {};
    utils.inArray = function(searchFor, property) {
        var retVal = -1;
        var self = this;
        for(var index=0; index < self.length; index++){
            var item = self[index];
            if (item.hasOwnProperty(property)) {
                if (item[property].toLowerCase() === searchFor.toLowerCase()) {
                    retVal = index;
                    return retVal;
                }
            }
        };
        return retVal;
    };


    Array.prototype.inArray = utils.inArray;

    var i = tableau.inArray(cible,  "classe");
    // console.log(tableau[i].nom);
    return tableau[i].nom;

};


