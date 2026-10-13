const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const order = await prisma.order.create({
      data: {
        customer: "عميل تجريبي",
        total: 500,
        status: "معلق"
      }
    });
    console.log("تم إنشاء الطلب بنجاح:", order);
  } catch (e) {
    console.error("خطأ:", e);
  } finally {
    await prisma.$disconnect();
  }
}

main();