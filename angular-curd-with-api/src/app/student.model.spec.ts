import { StudentModel } from './student.model';

fdescribe('StudentModel', () => {

  it('should create an instance', () => {
    expect(StudentModel).toBeTruthy();
  });

  it('should create an instance manually', () => {
        const student = new StudentModel();
        expect(student).toBeTruthy();
  });

  it('should have defined properties ',()=> {
    const address = {
      id: 1,
      city: 'Sample City',
      state: 'Sample State',
      country: 'Sample Country',
    };

    const student = new StudentModel();
    student.id = 123;
    student.firstName = 'John';
    student.lastName = 'Doe';
    student.emailId = 'john.doe@example.com';
    student.phoneNo = 123456789;
    student.address = address;

    expect(student.id).toBe(123);
    expect(student.firstName).toBe('John');
    expect(student.lastName).toBe('Doe');
    expect(student.emailId).toBe('john.doe@example.com');
    expect(student.phoneNo).toBe(123456789);
    expect(student.address).toEqual(address);
  });
});
