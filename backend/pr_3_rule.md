```markdown
## 📚 Domain Model Centralization using Classes

**Purpose:**
To standardize the definition of persistent data entities and core domain structures by migrating from simple TypeScript interfaces to explicit, exportable TypeScript classes. This approach centralizes model definitions, providing a clear boundary and allowing models to potentially carry method implementations or structural behaviors in addition to defining type shapes.

**Rules:**
1. **Centralization:** All primary domain entity definitions (models) must be grouped and exported from a single, designated location (e.g., `backend/src/database/entities/models.ts`).
2. **Type Usage:** Instead of relying on `interface` definitions for structured data objects that represent database records or core domain concepts, use `export class` declarations.
3. **Explicit Structure:** Class properties should define the public structure of the entity, mirroring the database schema and ensuring consistency across services.

**Valid Examples:**

```typescript
// backend/src/database/entities/models.ts
export class User {
    public id: number;
    public username: string;
    public password: string;
}

export class Task {
    public id: number;
    public title: string;
    public description: string;
}
```

**Invalid Examples:**

```typescript
// ❌ Anti-Pattern: Defining model structure as an interface
export interface Task {
    id: number;
    title: string;
    description: string;
}
```

**Review Guidance:**
When reviewing the implementation of new domain entities or refactoring existing ones, verify that the structure definition uses `export class` within the model repository, rather than relying on `interface`. This ensures that all services importing the model are accessing a concrete, type-defined structure.
```
