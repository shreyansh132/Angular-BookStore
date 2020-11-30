export class UserModel {
    constructor(
        public customerId: number,
		public firstName: string,
		public lastName: string,
		public mobile: string,
		public email: string,
		public password: string,
		public active: number,
		public creationDate:string,
        ){}

}
