function parcourirTableau(cible) {


    var styleCaractere = function(classe, nom, pack, italique) {
        this.classe = classe;
        this.nom = nom;
        this.pack = pack;
        this.italique = italique;
    };


    var tableau = [  

        new styleCaractere("C1G1", "Panorama ExtraCondensed-Thin", "Panorama ExtraCondensed", "Panorama ExtraCondensed-ThinItalic"),
        new styleCaractere("C1G2", "Panorama ExtraCondensed-ExtraLight", "Panorama ExtraCondensed", "Panorama ExtraCondensed-ExtraLightItalic"),
        new styleCaractere("C1G3", "Panorama ExtraCondensed-Light", "Panorama ExtraCondensed", "Panorama ExtraCondensed-LightItalic"),
        new styleCaractere("C1G4", "Panorama ExtraCondensed-Regular", "Panorama ExtraCondensed", "Panorama ExtraCondensed-Italic"),
        new styleCaractere("C1G5", "Panorama ExtraCondensed-SemiBold", "Panorama ExtraCondensed", "Panorama ExtraCondensed-SemiBoldItalic"),
        new styleCaractere("C1G6", "Panorama ExtraCondensed-Bold", "Panorama ExtraCondensed", "Panorama ExtraCondensed-BoldItalic"),
        new styleCaractere("C1G7", "Panorama ExtraCondensed-Black", "Panorama ExtraCondensed", "Panorama ExtraCondensed-BlackItalic"),
        new styleCaractere("C1G8", "Panorama ExtraCondensed-Ultra", "Panorama ExtraCondensed", "Panorama ExtraCondensed-UltraItalic"),

        new styleCaractere("C2G1", "Panorama SemiCondensed-Thin", "Panorama SemiCondensed", "Panorama SemiCondensed-ThinItalic"),
        new styleCaractere("C2G2", "Panorama SemiCondensed-ExtraLight", "Panorama SemiCondensed", "Panorama SemiCondensed-ExtraLightItalic"),
        new styleCaractere("C2G3", "Panorama SemiCondensed-Light", "Panorama SemiCondensed", "Panorama SemiCondensed-LightItalic"),
        new styleCaractere("C2G4", "Panorama SemiCondensed-Regular", "Panorama SemiCondensed", "Panorama SemiCondensed-Italic"),
        new styleCaractere("C2G5", "Panorama SemiCondensed-SemiBold", "Panorama SemiCondensed", "Panorama SemiCondensed-SemiBoldItalic"),
        new styleCaractere("C2G6", "Panorama SemiCondensed-Bold", "Panorama SemiCondensed", "Panorama SemiCondensed-BoldItalic"),
        new styleCaractere("C2G7", "Panorama SemiCondensed-Black", "Panorama SemiCondensed", "Panorama SemiCondensed-BlackItalic"),
        new styleCaractere("C2G8", "Panorama SemiCondensed-Ultra", "Panorama SemiCondensed", "Panorama SemiCondensed-UltraItalic"),

        new styleCaractere("C3G1", "Panorama Condensed-Thin", "Panorama Condensed", "Panorama Condensed-ThinItalic"),
        new styleCaractere("C3G2", "Panorama Condensed-ExtraLight", "Panorama Condensed", "Panorama Condensed-ExtraLightItalic"),
        new styleCaractere("C3G3", "Panorama Condensed-Light", "Panorama Condensed", "Panorama Condensed-LightItalic"),
        new styleCaractere("C3G4", "Panorama Condensed-Regular", "Panorama Condensed", "Panorama Condensed-Italic"),
        new styleCaractere("C3G5", "Panorama Condensed-SemiBold", "Panorama Condensed", "Panorama Condensed-SemiBoldItalic"),
        new styleCaractere("C3G6", "Panorama Condensed-Bold", "Panorama Condensed", "Panorama Condensed-BoldItalic"),
        new styleCaractere("C3G7", "Panorama Condensed-Black", "Panorama Condensed", "Panorama Condensed-BlackItalic"),
        new styleCaractere("C3G8", "Panorama Condensed-Ultra", "Panorama Condensed", "Panorama Condensed-UltraItalic"),

        new styleCaractere("C4G1", "Panorama Thin", "Panorama", "Panorama ThinItalic"),
        new styleCaractere("C4G2", "Panorama ExtraLight", "Panorama", "Panorama ExtraLightItalic"),
        new styleCaractere("C4G3", "Panorama Light", "Panorama", "Panorama LightItalic"),
        new styleCaractere("C4G4", "Panorama Regular", "Panorama", "Panorama Italic"),
        new styleCaractere("C4G5", "Panorama SemiBold", "Panorama", "Panorama SemiBoldItalic"),
        new styleCaractere("C4G6", "Panorama Bold", "Panorama", "Panorama BoldItalic"),
        new styleCaractere("C4G7", "Panorama Black", "Panorama", "Panorama BlackItalic"),
        new styleCaractere("C4G8", "Panorama Ultra", "Panorama", "Panorama UltraItalic"),

        new styleCaractere("C5G1", "Panorama Wide-Thin", "Panorama Wide", "Panorama Wide-ThinItalic"),
        new styleCaractere("C5G2", "Panorama Wide-ExtraLight", "Panorama Wide", "Panorama Wide-ExtraLightItalic"),
        new styleCaractere("C5G3", "Panorama Wide-Light", "Panorama Wide", "Panorama Wide-LightItalic"),
        new styleCaractere("C5G4", "Panorama Wide-Regular", "Panorama Wide", "Panorama Wide-Italic"),
        new styleCaractere("C5G5", "Panorama Wide-SemiBold", "Panorama Wide", "Panorama Wide-SemiBoldItalic"),
        new styleCaractere("C5G6", "Panorama Wide-Bold", "Panorama Wide", "Panorama Wide-BoldItalic"),
        new styleCaractere("C5G7", "Panorama Wide-Black", "Panorama Wide", "Panorama Wide-BlackItalic"),
        new styleCaractere("C5G8", "Panorama Wide-Ultra", "Panorama Wide", "Panorama Wide-UltraItalic"),

        new styleCaractere("C6G1", "Panorama ExtraExtended-Thin", "Panorama ExtraExtended", "Panorama ExtraExtended-ThinItalic"),
        new styleCaractere("C6G2", "Panorama ExtraExtended-ExtraLight", "Panorama ExtraExtended", "Panorama ExtraExtended-ExtraLightItalic"),
        new styleCaractere("C6G3", "Panorama ExtraExtended-Light", "Panorama ExtraExtended", "Panorama ExtraExtended-LightItalic"),
        new styleCaractere("C6G4", "Panorama ExtraExtended-Regular", "Panorama ExtraExtended", "Panorama ExtraExtended-Italic"),
        new styleCaractere("C6G5", "Panorama ExtraExtended-SemiBold", "Panorama ExtraExtended", "Panorama ExtraExtended-SemiBoldItalic"),
        new styleCaractere("C6G6", "Panorama ExtraExtended-Bold", "Panorama ExtraExtended", "Panorama ExtraExtended-BoldItalic"),
        new styleCaractere("C6G7", "Panorama ExtraExtended-Black", "Panorama ExtraExtended", "Panorama ExtraExtended-BlackItalic"),
        new styleCaractere("C6G8", "Panorama ExtraExtended-Ultra", "Panorama ExtraExtended", "Panorama ExtraExtended-UltraItalic")

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
    console.log(tableau[i].nom);
    return tableau[i].nom;

};


