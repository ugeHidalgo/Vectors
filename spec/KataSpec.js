describe('Kata', function() {
  var a,b;

  beforeEach(function() {
    a = new Vector([1,2]);
    b = new Vector([3,4]);
    c = new Vector([5,6,7,8]);
  });

  it('should be able to test', function() {
    expect(true).toBeTruthy();
  });

  it('should create the vectors needed for the tests', function() {
      expect(a.components[0]).toEqual(1,'First element in first vector is not correct.');
      expect(a.components[1]).toEqual(2,'Second element in first vector is not correct.');
      expect(b.components[0]).toEqual(3,'First element in second vector is not correct.');
      expect(b.components[1]).toEqual(4,'Second element in second vector is not correct.');
  });

  describe('equals', function() {
    describe('between vectors with different length', function() {
      it('should return false.', function() {
        expect(a.equals(c)).toBeFalsy('Vectors are different because have different length.');
      });
    });

    describe('between vectors with similar length', function() {
      it('should return false when elements are different.', function() {
        expect(a.equals(b)).toBeFalsy('Vectors are different.');
      }); 

      it('should return true when elements are equal.', function() {
        expect(a.equals(a)).toBeTruthy('Vectors are equal.');
      });
    });   
  });

  describe('add', function() {
    it('should return an error when vectors have different length.', function() {
      var test = function() {
        return a.add(c);
      }
      expect(test).toThrow ();
    });

    it('should add two vectors.', function() {
      var result = a.add(b);
      expect(result.components[0]).toEqual(4,'Add of first element is not correct.');
      expect(result.components[1]).toEqual(6,'Add of second element is not correct.');
      expect(result.equals(new Vector([4,6])));
    });    
  });

  describe('subtract', function() {
      it('should return an error when vectors have different length.', function() {
      var test = function() {
        return a.subtract(c);
      }
      expect(test).toThrow ();
    });

    it('should subtract two vectors.', function() {
      var result = a.subtract(b);
      expect(result.components[0]).toEqual(-2,'Substract of first element is not correct.');
      expect(result.components[1]).toEqual(-2,'Substract of second element is not correct.');
      expect(a.subtract(b).equals(new Vector([-2,-2])));
    });
  });

  describe('dot', function() {
    it('should return an error when vectors have different length.', function() {
      var test = function() {
        return a.dot(c);
      }
      expect(test).toThrow ();
    });

    it('should dot two vectors.', function() {
      expect(a.dot(b)).toEqual(11,'Dot of vectors is not correct.');
    });   
  });

  describe('norm', function() {
    it('should norm vectors.', function() {
      expect(a.norm()).toEqual(Math.sqrt(5),'Norm of first vector is not correct.');
      expect(b.norm()).toEqual(Math.sqrt(25),'Norm of second vector is not correct.');
    });    
  });

  describe('toString', function() {
    it('should convert a vector to string.', function() {
      expect(a.toString()).toEqual('(1,2)','toString of first vector is not correct.');
      expect(b.toString()).toEqual('(3,4)','toString of second vector is not correct.');
    });    
  });
});