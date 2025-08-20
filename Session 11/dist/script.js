//Xây dựng lớp User
class User {
    id;
    name;
    email;
    phone;
    purchasedCourses = [];
    discounts = [];
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    getDetails() {
        return `User id: ${this.id}
                User name: ${this.name}
                User email: ${this.email}
                User phone: ${this.phone}
                User purchased courses ${this.purchasedCourses.toString()}
                User discounts: ${this.discounts.toString()}`;
    }
    buyCourse(course) { }
}
//Xây dựng lớp Course
class Course {
    courseId;
    courseName;
    price;
    duration;
    studentsCount = 0;
    constructor(id, name, price, duration) {
        this.courseId = id;
        this.courseName = name;
        this.price = price;
        this.duration = duration;
    }
    displayCourse() {
        console.log(`
            Course id: ${this.courseId}
            Course name: ${this.courseName}
            Course price: ${this.courseName}
            Course duration: ${this.duration}
            Course student count: ${this.studentsCount}
            `);
    }
    ;
}
class FreeCourse extends Course {
    constructor(id, name, duration) {
        super(id, name, 0, duration);
    }
    getCertificate() {
        console.log("Không có chứng chỉ");
        return '';
    }
    getRefundPolicy() {
        console.log("Không có chính sách hoàn tiền");
        return '';
    }
}
class PaidCourse extends Course {
    constructor(id, name, price, duration) {
        super(id, name, price, duration);
    }
    getCertificate() {
        return `Chứng chỉ khóa ${this.courseName}`;
    }
    getRefundPolicy() {
        return 'Hoàn lại tiền nếu như thời gian học dưới 2 giờ.';
    }
}
//Xây dựng lớp CourseManager
class CourseManager {
    courses = [];
    users = [];
    discounts = [];
    addCourse(type, courseName, coursePrice, courseDuration) {
        let id = String(prompt("Nhập id người khóa học:"));
        let newCourse;
        if (type === 'free') {
            newCourse = new FreeCourse(id, courseName, courseDuration);
        }
        else {
            newCourse = new PaidCourse(id, courseName, coursePrice, courseDuration);
        }
        this.courses.push(newCourse);
    }
    createUser(name, email, phone) {
        let id = String(prompt("Nhập id người dùng:"));
        let newUser = new User(id, name, email, phone);
        this.users.push(newUser);
    }
    createNewDiscount(discountCode, discountValue) {
        let newDiscount = {
            code: discountCode,
            value: discountValue
        };
        this.discounts.push(newDiscount);
    }
    handleBuyCourse(userId, courseId) {
        let user = this.users.find((user) => user.id === userId);
        let course = this.courses.find((course) => course.courseId === courseId);
        if (user && course) {
            user.purchasedCourses.push(courseId);
            return "Mua khóa học thành công";
        }
        return "Mua khóa học thất bại";
    }
    handleRefundCourse(userId, courseId) {
        let user = this.users.find((user) => user.id === userId);
        if (user) {
            let courseIndex = user.purchasedCourses.findIndex((course) => course === courseId);
            if (courseIndex != -1) {
                user.purchasedCourses.splice(courseIndex, 1);
                return "Hoàn tiền thành công";
            }
        }
        return "Hoàn tiền thất bại";
    }
    listCourses(numOfStudents) {
        if (numOfStudents) {
            // let courseByStudentsCount = this.courses.filter((course) => course.studentsCount === numOfStudents)
            // courseByStudentsCount.forEach((course) => {
            //     course.displayCourse()
            // })
            this.courses.map((course) => {
                if (course.studentsCount === numOfStudents) {
                    course.displayCourse();
                }
            });
        }
        else {
            this.courses.map((course) => {
                course.displayCourse();
            });
        }
    }
    showUserInformation(email) {
        let user = this.users.find((user) => user.email === email);
        if (user) {
            console.log(user.getDetails());
        }
        else {
            console.log("Không tìm thấy");
        }
    }
    calculateTotalRevenue() {
        let allPurchasedCourse = [];
        this.users.forEach((user) => {
            allPurchasedCourse.concat(user.purchasedCourses);
        });
        let revenue = allPurchasedCourse.reduce((total, courseId) => {
            let course = this.courses.find((course) => course.courseId === courseId);
            if (course) {
                return total + course?.price;
            }
            return total;
        }, 0);
        return revenue;
    }
    giftDiscount(userId, discountCode) {
        let user = this.users.find((user) => user.id === userId);
        let discount = this.discounts.find((discount) => discount.code === discountCode);
        if (user && discount) {
            user.discounts.push(discountCode);
        }
    }
    getCertificate(userId) {
        let user = this.users.find((user) => user.id === userId);
        if (user) {
            user.purchasedCourses.forEach((courseId) => {
                let course = this.courses.find((course) => course.courseId === courseId);
                if (course && course.price) {
                    console.log(course.getCertificate());
                }
            });
        }
    }
    getRefundPolicy(courseId) {
        let course = this.courses.find((course) => course.courseId === courseId);
        if (course) {
            course.getRefundPolicy();
        }
    }
}
//Xây dựng menu
function main() {
    let choice;
    let userId;
    let courseId;
    let courseManager = new CourseManager();
    do {
        choice = prompt(`
        1. Thêm người dùng.
        2. Thêm khóa học.
        3. Thêm mã giảm giá.
        4. Mua khóa học.
        5. Hoàn tiền khóa học.
        6. Hiển thị danh sách khóa học (sử dụng map).
        7. Hiển thị thông tin người dùng (sử dụng find).
        8. Tính tổng doanh thu từ các khóa học đã bán (sử dụng reduce).	
        9. Tặng mã giảm giá cho người dùng (sử dụng find).
        10. Hiển thị toàn bộ chứng chỉ của người dùng (sử dụng find).
        11. Hiển thị chính sách hoàn tiền (sử dụng find).
        12. Thoát chương trình.`);
        switch (choice) {
            case '1':
                let userName = String(prompt("Nhập tên người dùng"));
                let email = String(prompt("Nhập email người dùng"));
                let phone = String(prompt("Nhập SĐT người dùng"));
                courseManager.createUser(userName, email, phone);
                break;
            case '2':
                let courseName = String(prompt("Nhập tên khóa học"));
                let coursePrice = Number(prompt("Nhập giá khóa học"));
                let duration = Number(prompt("Nhập thời lượng khóa học"));
                let type = String(prompt("Nhập loại khóa học"));
                if (type === "free" || type === "paid") {
                    courseManager.addCourse(type, courseName, coursePrice, duration);
                }
                break;
            case '3':
                let code = String(prompt("Nhập mã giảm giá"));
                let value = Number(prompt("Nhập giá trị mã"));
                courseManager.createNewDiscount(code, value);
                break;
            case '4':
                userId = String(prompt("Nhập id người dùng"));
                courseId = String(prompt("Nhập id khóa học"));
                courseManager.handleBuyCourse(userId, courseId);
                break;
            case '5':
                userId = String(prompt("Nhập id người dùng"));
                courseId = String(prompt("Nhập id khóa học"));
                courseManager.handleRefundCourse(userId, courseId);
                break;
            case '6':
                courseManager.listCourses();
                break;
            case '7':
                let findEmail = String(prompt("Nhập email người dùng"));
                courseManager.showUserInformation(findEmail);
                break;
            case '8':
                console.log(` Tổng doanh thu là: ${courseManager.calculateTotalRevenue()}`);
                break;
            case '9':
                userId = String(prompt("Nhập id người dùng"));
                let discountCode = String(prompt("Nhập mã giảm giá"));
                courseManager.giftDiscount(userId, discountCode);
                break;
            case '10':
                userId = String(prompt("Nhập id người dùng"));
                courseManager.getCertificate(userId);
                break;
            case '11':
                courseId = String(prompt("Nhập id khóa học"));
                courseManager.getRefundPolicy(courseId);
                break;
            case '12':
                console.log("Thoát chương trình");
                break;
            default:
                console.log("Không hợp lệ");
        }
    } while (choice != '12');
}
main();
export {};
//# sourceMappingURL=script.js.map