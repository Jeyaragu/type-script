// Protected - The protected properties or method only available with in the class and sub-classes
class MemberDetails {
  memberName: string;
  memberEmail: string;
  private memberDesignation: string;
  memberStatus?: string = "Active";
  constructor(
    memberName: string,
    memberEmail: string,
    memberDesignation: string,
    memberStatus?: string
  ) {
    this.memberName = memberName;
    this.memberEmail = memberEmail;
    this.memberDesignation = memberDesignation;
    if (memberStatus) {
      this.memberStatus = memberStatus;
    }
  }
  public printName() {
    return `MemberName: ${this.memberName}`;
  }
  protected protectedMethod() {
    return `ProtectedPropsValue: ${this.memberEmail}`;
  }
  private printDesignation() {
    return `Designation of member ${this.memberDesignation}`;
  }
}

class AccessDetails extends MemberDetails {
  componentName: string;
  accessType: string;
  isAccessRestricted: boolean;
  constructor(
    memberName: string,
    memberEmail: string,
    memberDesignation: string,
    componentName: string,
    accessType: string,
    isAccessRestricted: boolean,
    memberStatus?: string
  ) {
    super(memberName, memberEmail, memberDesignation, memberStatus);
    this.componentName = componentName;
    this.accessType = accessType;
    this.isAccessRestricted = isAccessRestricted;
  }
  // Here printing the protected properties from Parent Class
  getProtectedProps() {
    return this.protectedMethod();
  }

  // Accessing the private method from parent class its giving the error
  // accessPrivateMethod () {
  //   return this.printDesignation()
  // }
}
const memberDetails = new MemberDetails(
  "Mark",
  "mark@mail.com",
  "Admin",
  "All Menu"
);
const accessDetails = new AccessDetails(
  "Mark",
  "mark@mail.com",
  "Admin",
  "All Menu",
  "full-access",
  true
);
// Access Public Parameters
console.log(accessDetails.getProtectedProps());
