import User from "./user.model";

export const createUserToDb = async () => {
    const user = await new User({
        id: '102',
        role: 'student',
        password: 'abc123',
        name: {
            firstName: 'Tahjib',
            midddleName: 'Hossain',
            lastName: 'Leon'
        },
        dob: '17 Aug 1998',
        gender: "male",
        email: 'abc@gmail.com',
        contactNo: '0132423',
        emergencyContactNo: '02324',
        presentAddress: 'Dhaka',
        permanentAddress: 'Khulna'
    });
    await user.save();
    return user;
};