# Step 1: Use the official Node.js 20.12.2 image as a base
FROM node:alpine3.18 as base

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Step 2: Install dependencies
# Using --production flag to avoid installing devDependencies in the final image
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Step 3: Build the application for production
FROM base as builder
RUN npm run build

# Step 4: Set up the production environment
FROM node:alpine3.18 as production

WORKDIR /app

# Only copy the build artifacts and necessary files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Expose the port the app runs on
EXPOSE 3000

# Set the command to start the app
CMD ["npm", "start"]
