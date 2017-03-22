var theForm = new VarienForm('theForm', true);

//Spain - ZIP: 99999
Validation.add('zip-es','Código postal incorrecto',function(zip){
    var reg = new RegExp('^[0-9]{5}$');
    if(!reg.test(zip)){
        return false;
    }
    else return true;
});

//France - ZIP: 99999
Validation.add('zip-fr','Code postal invalide',function(zip){
    var reg = new RegExp('^[0-9]{5}$');
    if(!reg.test(zip)){
        return false;
    }
    else return true;
});

//Germany - ZIP: 99999
Validation.add('zip-de','Ungültige Postleitzahl',function(zip){
    var reg = new RegExp('^[0-9]{5}$');
    if(!reg.test(zip)){
        return false;
    }
    else return true;
});

//UK - ZIP (As CRM Validation)
/*
 L = letter / N = number / A = alphanumeric
 LN NLL   ->regexp1
 LLN NLL  ->regexp2
 LNL NLL  ->regexp3
 LLNA NLL ->regexp4
 LNN NLL  ->regexp5
 LLLL 1ZZ ->regexp6
*/
Validation.add('zip-gb','Invalid postal code',function(zip){
    var regex1 = new RegExp('^[a-zA-Z]{1}[0-9]{1} [0-9]{1}[a-zA-Z]{2}$');
    var regex2 = new RegExp('^[a-zA-Z]{2}[0-9]{1} [0-9]{1}[a-zA-Z]{2}$');
    var regex3 = new RegExp('^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1} [0-9]{1}[a-zA-Z]{2}$');
    var regex4 = new RegExp('^[a-zA-Z]{2}[0-9]{1}[a-zA-Z0-9]{1} [0-9]{1}[a-zA-Z]{2}$');
    var regex5 = new RegExp('^[a-zA-Z]{1}[0-9]{2} [0-9]{1}[a-zA-Z]{2}$');
    var regex6 = new RegExp('^[a-zA-Z]{4} 1[zZ]{2}$');

    if(regex1.test(zip)){
        return true;
    } else if(regex2.test(zip)){
        return true;
    } else if(regex3.test(zip)){
        return true;
    } else if(regex4.test(zip)){
        return true;
    } else if(regex5.test(zip)){
        return true;
    } else if(regex6.test(zip)){
        return true;
    } else return false;
});

//International store
Validation.add('zip-north_en','Please enter a valid postal code',function(zip){
    return true;
});
