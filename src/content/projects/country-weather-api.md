---
title: CountryWeatherAPI
summary: A RESTful .NET API that manages countries and their representatives and keeps weather data in sync from OpenWeatherMap.
category: Software
tags: [.NET, C#, PostgreSQL, Docker]
cover: ../../assets/projects/country-weather-api/swagger.jpg
coverAlt: Swagger UI listing the CountryWeatherAPI endpoints
date: 2024-07-23
featured: 3
links:
  github: https://github.com/cemerenkula/CountryWeatherAPI
---

A RESTful API built with .NET Core 7 and PostgreSQL, following Clean Architecture with separate Domain, Application and Infrastructure layers. It manages countries, the representative responsible for each country, and current weather data pulled from OpenWeatherMap.

## Core features

- **Country and representative management.** EF Core configuration enforces that each country has exactly one representative.
- **Coordinate ranges.** Countries are stored with latitude/longitude ranges (e.g. `36–42°N, 26–45°E`) validated by custom attributes on create and update.
- **Representative validation.** A composite unique key on name, surname and birth date, plus phone number validation with LibPhoneNumber.

## Weather integration

- **Async OpenWeatherMap client** with Polly retry policies for fault tolerance.
- **Background scheduler** (`IHostedService`) that refreshes weather data for all countries automatically.
- **ETag-based versioning** so repeated update requests are idempotent.

## Performance

- **Batched EF Core operations** with `AddRangeAsync` and `ExecuteUpdate`, halving bulk update latency.
- **Parallel async processing** with `Parallel.ForEachAsync` and throttled concurrency, reaching 300+ weather updates per minute.
- **Spatial indexing** with a PostgreSQL GiST index on latitude and longitude for fast coordinate lookups.

## Data integrity

- Unique indexes prevent duplicate coordinates.
- `SERIALIZABLE` transactions keep concurrent writes consistent.
- CQRS separates the read and write models for weather queries.

## Tooling

Swagger/OpenAPI documentation generated from XML comments, and a Docker Compose setup for running PostgreSQL locally.
