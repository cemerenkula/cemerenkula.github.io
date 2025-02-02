---
title: "CountryWeatherAPI"
excerpt: "Developed RESTful .NET Core API for a country-weather management system.<br/><img src='/images/CountryWeatherAPI.jpg'>"
collection: portfolio
---

**Portfolio Project: Country-Weather Management API**  

### Architecture & Core Features  
- Built a **RESTful .NET Core 7 API** using **Clean Architecture** (Domain/Application/Infrastructure layers) with **PostgreSQL** for relational data storage.  
- Enforced **1:N country-to-representative mapping** via EF Core configurations, ensuring each country has a single representative.  
- Implemented **integer-based coordinate ranges** (e.g., `36–42°N, 26–45°E`) with custom validation attributes for country creation/updates.  

### Key Technical Components  
- **Representative Management**:  
  - Unique composite key constraints (`Name`, `Surname`, `BirthDate`) and **LibPhoneNumber** integration for phone validation.  
  - Optimized phone storage using `SHA-256` hashing to minimize database footprint.  
- **Weather Integration**:  
  - Asynchronous **OpenWeatherMap API** client with retry policies (Polly) for fault tolerance.  
  - Background scheduler (`IHostedService`) for automated bulk weather updates.  

### Performance Optimization  
- **Batched EF Core Operations**: Reduced bulk update latency by 50% via `AddRangeAsync` + `ExecuteUpdate` optimizations.  
- **Parallel Async Processing**: Achieved 300+ RPM weather updates using `Parallel.ForEachAsync` with throttled concurrency.  
- **Spatial Indexing**: Accelerated coordinate lookups to `O(log n)` with PostgreSQL GiST indexes on `(Latitude, Longitude)`.  

### Validation & Integrity  
- **Concurrency Control**:  
  - `UNIQUE INDEX` constraints to prevent duplicate coordinates.  
  - `SERIALIZABLE` isolation level for high-concurrency transaction safety.  
- **ETag-Based Versioning**: Ensured idempotent weather updates to handle duplicate API requests.  

### Extras  
- **Swagger/OpenAPI** documentation with XML comments and custom operation filters.  
- **Docker-compose** setup for PostgreSQL containerization and seamless local development.  
- **CQRS Pattern** for weather queries, separating read/write models for scalability.  

### Skills Demonstrated  
- **REST API Design** | **.NET Performance Tuning** | **Cloud-Native Patterns**  
- **Relational Database Optimization** | **Concurrency Management** | **CI/CD-Ready Structure**  

![Delivery Driver Game Screenshot](/images/CountryWeatherAPI.jpg)