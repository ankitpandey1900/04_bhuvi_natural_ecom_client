import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');

  // Create categories
  const hairCareCategory = await prisma.category.upsert({
    where: { slug: 'hair-care' },
    update: {},
    create: {
      name: 'Hair Care',
      slug: 'hair-care',
    },
  });

  const skinCareCategory = await prisma.category.upsert({
    where: { slug: 'skin-care' },
    update: {},
    create: {
      name: 'Skin Care',
      slug: 'skin-care',
    },
  });

  const organicSoapsCategory = await prisma.category.upsert({
    where: { slug: 'organic-soaps' },
    update: {},
    create: {
      name: 'Organic Soaps',
      slug: 'organic-soaps',
    },
  });

  // --- HAIR CARE PRODUCTS ---
  
  await prisma.product.upsert({
    where: { slug: 'hair-oil' },
    update: {},
    create: {
      name: 'Hair Oil',
      slug: 'hair-oil',
      shortDescription: 'Nourishing herbal hair oil for strength and growth.',
      categoryId: hairCareCategory.id,
      isFeatured: true,
      variants: {
        create: [
          { sku: 'HO-200', name: '200 ml', price: 445 },
          { sku: 'HO-100', name: '100 ml', price: 245 },
        ]
      }
    }
  });

  await prisma.product.upsert({
    where: { slug: 'hair-mist' },
    update: {},
    create: {
      name: 'Hair Mist',
      slug: 'hair-mist',
      shortDescription: 'Refreshing hair mist for daily shine.',
      categoryId: hairCareCategory.id,
      variants: {
        create: [
          { sku: 'HM-100', name: '100 ml', price: 150 },
        ]
      }
    }
  });

  await prisma.product.upsert({
    where: { slug: 'shampoo' },
    update: {},
    create: {
      name: 'Shampoo',
      slug: 'shampoo',
      shortDescription: 'Gentle clarifying shampoo for all hair types.',
      categoryId: hairCareCategory.id,
      isFeatured: true,
      variants: {
        create: [
          { sku: 'SH-500', name: '500 ml', price: 450 },
          { sku: 'SH-200', name: '200 ml', price: 200 },
        ]
      }
    }
  });

  await prisma.product.upsert({
    where: { slug: 'conditioner' },
    update: {},
    create: {
      name: 'Conditioner',
      slug: 'conditioner',
      shortDescription: 'Deeply hydrating conditioner for silky smooth hair.',
      categoryId: hairCareCategory.id,
      variants: {
        create: [
          { sku: 'CO-500', name: '500 ml', price: 450 },
          { sku: 'CO-200', name: '200 ml', price: 200 },
        ]
      }
    }
  });

  // --- SKIN CARE PRODUCTS ---

  await prisma.product.upsert({
    where: { slug: 'night-gel' },
    update: {},
    create: {
      name: 'Night Gel',
      slug: 'night-gel',
      shortDescription: 'Overnight repair gel for radiant skin.',
      categoryId: skinCareCategory.id,
      isFeatured: true,
      variants: {
        create: [
          { sku: 'NG-S', name: 'Small', price: 150 },
          { sku: 'NG-B', name: 'Big', price: 400 },
        ]
      }
    }
  });

  await prisma.product.upsert({
    where: { slug: 'face-pack' },
    update: {},
    create: {
      name: 'Face Pack',
      slug: 'face-pack',
      shortDescription: 'Detoxifying natural face pack.',
      categoryId: skinCareCategory.id,
      variants: {
        create: [
          { sku: 'FP-S', name: 'Small', price: 80 },
          { sku: 'FP-B', name: 'Big', price: 150 },
        ]
      }
    }
  });

  await prisma.product.upsert({
    where: { slug: 'lip-balm' },
    update: {},
    create: {
      name: 'Lip Balm',
      slug: 'lip-balm',
      shortDescription: 'Intensely moisturizing tinted lip balm.',
      categoryId: skinCareCategory.id,
      variants: {
        create: [
          { sku: 'LB-S', name: 'Small', price: 80 },
          { sku: 'LB-B', name: 'Big', price: 150 },
        ]
      }
    }
  });

  // --- ORGANIC SOAPS ---

  await prisma.product.upsert({
    where: { slug: 'ubtan-soap' },
    update: {},
    create: {
      name: 'Ubtan Soap',
      slug: 'ubtan-soap',
      shortDescription: 'Traditional ubtan soap for glowing skin.',
      categoryId: organicSoapsCategory.id,
      isFeatured: true,
      variants: {
        create: [
          { sku: 'US-100', name: '100 gm', price: 100 },
          { sku: 'US-80', name: '80 gm', price: 80 },
        ]
      }
    }
  });

  await prisma.product.upsert({
    where: { slug: 'neem-soap' },
    update: {},
    create: {
      name: 'Neem Soap',
      slug: 'neem-soap',
      shortDescription: 'Purifying neem soap for clear skin.',
      categoryId: organicSoapsCategory.id,
      variants: {
        create: [
          { sku: 'NS-100', name: '100 gm', price: 90 },
          { sku: 'NS-75', name: '75 gm', price: 70 },
        ]
      }
    }
  });

  await prisma.product.upsert({
    where: { slug: 'aloe-vera-soap' },
    update: {},
    create: {
      name: 'Aloe Vera Soap',
      slug: 'aloe-vera-soap',
      shortDescription: 'Soothing aloe vera soap for sensitive skin.',
      categoryId: organicSoapsCategory.id,
      variants: {
        create: [
          { sku: 'AV-100', name: '100 gm', price: 80 },
          { sku: 'AV-75', name: '75 gm', price: 60 },
        ]
      }
    }
  });

  await prisma.product.upsert({
    where: { slug: 'rose-soap' },
    update: {},
    create: {
      name: 'Rose Soap',
      slug: 'rose-soap',
      shortDescription: 'Luxurious rose infused organic soap.',
      categoryId: organicSoapsCategory.id,
      variants: {
        create: [
          { sku: 'RS-100', name: '100 gm', price: 100 },
        ]
      }
    }
  });

  await prisma.product.upsert({
    where: { slug: 'neem-pudina-moringa-soap' },
    update: {},
    create: {
      name: 'Neem, Pudina, Moringa Soap',
      slug: 'neem-pudina-moringa-soap',
      shortDescription: 'Triple-herb blend for ultimate skin health.',
      categoryId: organicSoapsCategory.id,
      isFeatured: true,
      variants: {
        create: [
          { sku: 'NPM-100', name: '100 gm', price: 100 },
        ]
      }
    }
  });

  await prisma.product.upsert({
    where: { slug: 'loofa-soap' },
    update: {},
    create: {
      name: 'Loofa Soap',
      slug: 'loofa-soap',
      shortDescription: 'Exfoliating loofa embedded natural soap.',
      categoryId: organicSoapsCategory.id,
      variants: {
        create: [
          { sku: 'LS-90', name: '90 gm', price: 100 },
        ]
      }
    }
  });

  await prisma.product.upsert({
    where: { slug: 'charcoal-soap' },
    update: {},
    create: {
      name: 'Charcoal Soap',
      slug: 'charcoal-soap',
      shortDescription: 'Deep cleansing activated charcoal soap.',
      categoryId: organicSoapsCategory.id,
      variants: {
        create: [
          { sku: 'CS-75', name: '75 gm', price: 70 },
        ]
      }
    }
  });

  // Admin User
  const password = await hash('password123', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@bhuvinaturals.com' },
    update: {},
    create: {
      email: 'admin@bhuvinaturals.com',
      name: 'Admin User',
      passwordHash: password,
    },
  });

  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
