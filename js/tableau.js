function styleCaractere(classe, nom, pack, italique) {
    this.classe = classe;
    this.nom = nom;
    this.pack = pack;
};

    window.tableau = {  

        C1G1: new styleCaractere("C1G1", "Panorama ExtraCondensed UltraLight", "Panorama ExtraCondensed"),
        C1G2: new styleCaractere("C1G2", "Panorama ExtraCondensed ExtraLight", "Panorama ExtraCondensed"),
        C1G3: new styleCaractere("C1G3", "Panorama ExtraCondensed Light", "Panorama ExtraCondensed"),
        C1G4: new styleCaractere("C1G4", "Panorama ExtraCondensed Regular", "Panorama ExtraCondensed"),
        C1G5: new styleCaractere("C1G5", "Panorama ExtraCondensed SemiBold", "Panorama ExtraCondensed"),
        C1G6: new styleCaractere("C1G6", "Panorama ExtraCondensed Bold", "Panorama ExtraCondensed"),
        C1G7: new styleCaractere("C1G7", "Panorama ExtraCondensed Black", "Panorama ExtraCondensed"),
        C1G8: new styleCaractere("C1G8", "Panorama ExtraCondensed UltraBlack", "Panorama ExtraCondensed"),

        C2G1: new styleCaractere("C2G1", "Panorama SemiCondensed UltraLight", "Panorama SemiCondensed"),
        C2G2: new styleCaractere("C2G2", "Panorama SemiCondensed ExtraLight", "Panorama SemiCondensed"),
        C2G3: new styleCaractere("C2G3", "Panorama SemiCondensed Light", "Panorama SemiCondensed"),
        C2G4: new styleCaractere("C2G4", "Panorama SemiCondensed Regular", "Panorama SemiCondensed"),
        C2G5: new styleCaractere("C2G5", "Panorama SemiCondensed SemiBold", "Panorama SemiCondensed", "Panorama SemiCondensed SemiBoldItalic"),
        C2G6: new styleCaractere("C2G6", "Panorama SemiCondensed Bold", "Panorama SemiCondensed", "Panorama SemiCondensed BoldItalic"),
        C2G7: new styleCaractere("C2G7", "Panorama SemiCondensed Black", "Panorama SemiCondensed", "Panorama SemiCondensed BlackItalic"),
        C2G8: new styleCaractere("C2G8", "Panorama SemiCondensed UltraBlack", "Panorama SemiCondensed", "Panorama SemiCondensed UltraBlackItalic"),

        C3G1: new styleCaractere("C3G1", "Panorama Condensed UltraLight", "Panorama Condensed"),
        C3G2: new styleCaractere("C3G2", "Panorama Condensed ExtraLight", "Panorama Condensed"),
        C3G3: new styleCaractere("C3G3", "Panorama Condensed Light", "Panorama Condensed"),
        C3G4: new styleCaractere("C3G4", "Panorama Condensed Regular", "Panorama Condensed"),
        C3G5: new styleCaractere("C3G5", "Panorama Condensed SemiBold", "Panorama Condensed"),
        C3G6: new styleCaractere("C3G6", "Panorama Condensed Bold", "Panorama Condensed"),
        C3G7: new styleCaractere("C3G7", "Panorama Condensed Black", "Panorama Condensed"),
        C3G8: new styleCaractere("C3G8", "Panorama Condensed UltraBlack", "Panorama Condensed"),

        C4G1: new styleCaractere("C4G1", "Panorama Thin", "Panorama"),
        C4G2: new styleCaractere("C4G2", "Panorama ExtraLight", "Panorama"),
        C4G3: new styleCaractere("C4G3", "Panorama Light", "Panorama"),
        C4G4: new styleCaractere("C4G4", "Panorama Regular", "Panorama"),
        C4G5: new styleCaractere("C4G5", "Panorama SemiBold", "Panorama"),
        C4G6: new styleCaractere("C4G6", "Panorama Bold", "Panorama"),
        C4G7: new styleCaractere("C4G7", "Panorama Black", "Panorama"),
        C4G8: new styleCaractere("C4G8", "Panorama Ultra", "Panorama"),

        C5G1: new styleCaractere("C5G1", "Panorama Wide UltraLight", "Panorama Wide"),
        C5G2: new styleCaractere("C5G2", "Panorama Wide ExtraLight", "Panorama Wide"),
        C5G3: new styleCaractere("C5G3", "Panorama Wide Light", "Panorama Wide"),
        C5G4: new styleCaractere("C5G4", "Panorama Wide Regular", "Panorama Wide"),
        C5G5: new styleCaractere("C5G5", "Panorama Wide SemiBold", "Panorama Wide"),
        C5G6: new styleCaractere("C5G6", "Panorama Wide Bold", "Panorama Wide"),
        C5G7: new styleCaractere("C5G7", "Panorama Wide Black", "Panorama Wide"),
        C5G8: new styleCaractere("C5G8", "Panorama Wide UltraBlack", "Panorama Wide"),

        C6G1: new styleCaractere("C6G1", "Panorama ExtraExtended UltraLight", "Panorama ExtraExtended"),
        C6G2: new styleCaractere("C6G2", "Panorama ExtraExtended ExtraLight", "Panorama ExtraExtended"),
        C6G3: new styleCaractere("C6G3", "Panorama ExtraExtended Light", "Panorama ExtraExtended"),
        C6G4: new styleCaractere("C6G4", "Panorama ExtraExtended Regular", "Panorama ExtraExtended"),
        C6G5: new styleCaractere("C6G5", "Panorama ExtraExtended SemiBold", "Panorama ExtraExtended"),
        C6G6: new styleCaractere("C6G6", "Panorama ExtraExtended Bold", "Panorama ExtraExtended"),
        C6G7: new styleCaractere("C6G7", "Panorama ExtraExtended Black", "Panorama ExtraExtended"),
        C6G8: new styleCaractere("C6G8", "Panorama ExtraExtended UltraBlack", "Panorama ExtraExtended"),

        // italic

        C1G1I: new styleCaractere("C1G1I", "Panorama ExtraCondensed UltraLight Italic", "Panorama ExtraCondensed"),
        C1G2I: new styleCaractere("C1G2I", "Panorama ExtraCondensed ExtraLight Italic", "Panorama ExtraCondensed"),
        C1G3I: new styleCaractere("C1G3I", "Panorama ExtraCondensed Light Italic", "Panorama ExtraCondensed"),
        C1G4I: new styleCaractere("C1G4I", "Panorama ExtraCondensed Italic", "Panorama ExtraCondensed"),
        C1G5I: new styleCaractere("C1G5I", "Panorama ExtraCondensed SemiBold Italic", "Panorama ExtraCondensed"),
        C1G6I: new styleCaractere("C1G6I", "Panorama ExtraCondensed Bold Italic", "Panorama ExtraCondensed"),
        C1G7I: new styleCaractere("C1G7I", "Panorama ExtraCondensed Black Italic", "Panorama ExtraCondensed"),
        C1G8I: new styleCaractere("C1G8I", "Panorama ExtraCondensed UltraBlack Italic", "Panorama ExtraCondensed"),

        C2G1I: new styleCaractere("C2G1I", "Panorama SemiCondensed UltraLight Italic", "Panorama SemiCondensed"),
        C2G2I: new styleCaractere("C2G2I", "Panorama SemiCondensed ExtraLight Italic", "Panorama SemiCondensed"),
        C2G3I: new styleCaractere("C2G3I", "Panorama SemiCondensed Light Italic", "Panorama SemiCondensed"),
        C2G4I: new styleCaractere("C2G4I", "Panorama SemiCondensed Italic", "Panorama SemiCondensed"),
        C2G5I: new styleCaractere("C2G5I", "Panorama SemiCondensed SemiBold Italic", "Panorama SemiCondensed"),
        C2G6I: new styleCaractere("C2G6I", "Panorama SemiCondensed Bold Italic", "Panorama SemiCondensed"),
        C2G7I: new styleCaractere("C2G7I", "Panorama SemiCondensed Black Italic", "Panorama SemiCondensed"),
        C2G8I: new styleCaractere("C2G8I", "Panorama SemiCondensed UltraBlack Italic", "Panorama SemiCondensed"),

        C3G1I: new styleCaractere("C3G1I", "Panorama Condensed UltraLight Italic", "Panorama Condensed"),
        C3G2I: new styleCaractere("C3G2I", "Panorama Condensed ExtraLight Italic", "Panorama Condensed"),
        C3G3I: new styleCaractere("C3G3I", "Panorama Condensed Light Italic", "Panorama Condensed"),
        C3G4I: new styleCaractere("C3G4I", "Panorama Condensed Italic", "Panorama Condensed"),
        C3G5I: new styleCaractere("C3G5I", "Panorama Condensed SemiBold Italic", "Panorama Condensed"),
        C3G6I: new styleCaractere("C3G6I", "Panorama Condensed Bold Italic", "Panorama Condensed"),
        C3G7I: new styleCaractere("C3G7I", "Panorama Condensed Black Italic", "Panorama Condensed"),
        C3G8I: new styleCaractere("C3G8I", "Panorama Condensed UltraBlack Italic", "Panorama Condensed"),

        C4G1I: new styleCaractere("C4G1I", "Panorama Thin Italic", "Panorama"),
        C4G2I: new styleCaractere("C4G2I", "Panorama ExtraLight Italic", "Panorama"),
        C4G3I: new styleCaractere("C4G3I", "Panorama Light Italic", "Panorama"),
        C4G4I: new styleCaractere("C4G4I", "Panorama  Italic", "Panorama"),
        C4G5I: new styleCaractere("C4G5I", "Panorama SemiBold Italic", "Panorama"),
        C4G6I: new styleCaractere("C4G6I", "Panorama Bold Italic", "Panorama"),
        C4G7I: new styleCaractere("C4G7I", "Panorama Black Italic", "Panorama"),
        C4G8I: new styleCaractere("C4G8I", "Panorama Ultra Italic", "Panorama"),

        C5G1I: new styleCaractere("C5G1I", "Panorama Wide UltraLight Italic", "Panorama Wide"),
        C5G2I: new styleCaractere("C5G2I", "Panorama Wide ExtraLight Italic", "Panorama Wide"),
        C5G3I: new styleCaractere("C5G3I", "Panorama Wide Light Italic", "Panorama Wide"),
        C5G4I: new styleCaractere("C5G4I", "Panorama Wide Italic", "Panorama Wide"),
        C5G5I: new styleCaractere("C5G5I", "Panorama Wide SemiBold Italic", "Panorama Wide"),
        C5G6I: new styleCaractere("C5G6I", "Panorama Wide Bold Italic", "Panorama Wide"),
        C5G7I: new styleCaractere("C5G7I", "Panorama Wide Black Italic", "Panorama Wide"),
        C5G8I: new styleCaractere("C5G8I", "Panorama Wide UltraBlack Italic", "Panorama Wide"),

        C6G1I: new styleCaractere("C6G1I", "Panorama ExtraExtended UltraLight Italic", "Panorama ExtraExtended"),
        C6G2I: new styleCaractere("C6G2I", "Panorama ExtraExtended ExtraLight Italic", "Panorama ExtraExtended"),
        C6G3I: new styleCaractere("C6G3I", "Panorama ExtraExtended Light Italic", "Panorama ExtraExtended"),
        C6G4I: new styleCaractere("C6G4I", "Panorama ExtraExtended Italic", "Panorama ExtraExtended"),
        C6G5I: new styleCaractere("C6G5I", "Panorama ExtraExtended SemiBold Italic", "Panorama ExtraExtended"),
        C6G6I: new styleCaractere("C6G6I", "Panorama ExtraExtended Bold Italic", "Panorama ExtraExtended"),
        C6G7I: new styleCaractere("C6G7I", "Panorama ExtraExtended Black Italic", "Panorama ExtraExtended"),
        C6G8I: new styleCaractere("C6G8I", "Panorama ExtraExtended UltraBlack Italic", "Panorama ExtraExtended")

    };


    function parcourirTableau(cible, type) {

console.log(cible);
    




    /*var utils = {};
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

    var i = tableau.inArray(cible,  "classe");*/
    // console.log(tableau[i].nom);

    if (type == 'famille') {
        return tableau[cible].pack;
    }
    if (type == 'slant') {
        return tableau[cible].pack;
    }
    else {
        if (cible instanceof Array) {
            $.each( cible , function( index, value ) {
              // return tableau[index].nom;
            });
        } else {
            return tableau[cible].nom;
        }
    }

};


