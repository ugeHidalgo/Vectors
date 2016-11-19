var Vector = function (components) {
  //Constructor
  this.components = components;

  //Class methods
  this.equals = function(vector){
    var i = 0;

    if (this.components.length !== vector.components.length) return false;
    while (i<this.components.length){
      if (this.components[i] !== vector.components[i]) return false;
      i++;
    }
    return true;
  }

  this.add = function(vector){
    var result = new Vector([]);

    checkComponents(this,vector);
    for (var i=0; i<this.components.length; i++){
      result.components.push(this.components[i] + vector.components[i]);
    }
    return result;
  }

  this.subtract = function(vector){
    var result = new Vector([]);

    checkComponents(this,vector);
    for (var i=0; i<this.components.length; i++){
      result.components.push(this.components[i] - vector.components[i]);
    }
    return result;
  }

  this.dot = function(vector){
    var result = 0;

    checkComponents(this,vector);
    for (var i=0; i<this.components.length; i++){
      result += this.components[i] * vector.components[i];
    }
    return result;
  }

  this.norm = function(){
    var result = 0;

    for (var i=0; i<this.components.length; i++){
      result += Math.pow(this.components[i],2);
    }
    return Math.sqrt(result);
  }

  this.toString = function(){
    return '(' + this.components.join(',') + ')';
  }

  //Private Methods
  checkComponents = function (comp1,comp2){
    if (comp1.components.length !== comp2.components.length) 
      throw {
        name : 'DifferentLength',
        message : 'Vectors has different length.'
      };
    return;
  }
};